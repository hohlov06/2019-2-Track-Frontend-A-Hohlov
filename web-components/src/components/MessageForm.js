import ChatBubble from './ChatBubble';
import MessageSequence from './MessageSequence';
import FormInput from './FormInput';
import * as Utils from './StorageUtils'

const template = document.createElement('template');
template.innerHTML = `
    <style>
    
    :host {
        min-height: 300px;
    }
    
        form {
            height: 100%;
            width: 100%;
            margin: 0;
            display: flex;
            flex: 1 1 auto;
            flex-direction: column;
        }
        
        form-input {
            width: 100%;
            margin-bottom: 0vh;
            flex: 1 1 5%;
            min-height: 40px;
            display: flex;
            flex-direction: row;
            overflow-y: auto;
        }

        .result {
            color: red;
            background-color: lightskyblue;
            height: 88.3vh;
            overflow-y: auto;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
        }

        input[type=submit] {
            visibility: collapse;
        }
        
        
    </style>
    <form>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Введите сообщение"></form-input>
    </form>
`;
class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$messageList = this._shadowRoot.querySelector('.result');

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    this.$input.addEventListener('sendClicked', this._onSendClickedPress.bind(this));
  }

  connectedCallback() {
    //this.loadFromStorage();
  }

  set chatId(value) {
    this._chatId = value;
  }

  get chatId() {
    return this._chatId;
  }

  loadFromStorage() {
    this.$messageList.innerHTML = '';
    try {
      const storageKey = Utils.chatStorageKey(this.chatId);
      const messageListString = localStorage.getItem(storageKey);
      if (messageListString === null)
        return;
      const messageList = Array.from(JSON.parse(messageListString));
      messageList.forEach((message) => {
        const messageBubble = document.createElement('chat-bubble');
        messageBubble.fromObj(message);
        this.$messageList.appendChild(messageBubble);
      });
      this.$messageList.scrollTop = this.$messageList.scrollHeight;
    } catch (e) {
      localStorage.clear();
      throw e;
    }
  }
  //
  // saveToStorage(message) {
  //   try {
  //     const storageKey = Utils.chatStorageKey(this.chatId);
  //     const messageList = Array.from(JSON.parse(localStorage.getItem(storageKey)));
  //     messageList.push(message.toObj());
  //     localStorage.setItem(storageKey, JSON.stringify(messageList));
  //   }
  //   catch(e) {
  //     localStorage.clear();
  //     throw e;
  //   }
  // }

  saveAllToStorage() {
    try {
      const chatBubbles = this.$messageList.querySelectorAll('chat-bubble');
      const messages = [];
      chatBubbles.forEach((bubble) => {
        messages.push(bubble.toObj());
      });
      const storageKey = Utils.chatStorageKey(this.chatId);
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch (e) {
      localStorage.clear();
      throw e;
    }
  }

  lastMessage() {
    const bubble = this.$messageList.querySelector(':last-child');
    if (bubble === null)
      return null;
    return bubble.toObj();
  }

  _onSubmit(event) {
    event.preventDefault();
    if (this.$input.value.toString().trim() !== '') {
      const lastMessageBubble = document.createElement('chat-bubble');
      lastMessageBubble.className = 'mine';
      lastMessageBubble.content = this.$input.value;
      lastMessageBubble.time = new Date();

      lastMessageBubble.status = 'notSentStatus';
      lastMessageBubble.profileId = Utils.myProfileId;
      this.$messageList.append(lastMessageBubble);
      this.$messageList.scrollTop = this.$messageList.scrollHeight;
      this.saveAllToStorage();
      this.$input.value = '';
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  _onSendClickedPress(event) {
    event.preventDefault();
    this.$form.dispatchEvent(new Event('submit'));
  }

  // _createMessage() {
  //   const messageBubble = document.createElement('chat-bubble');
  //   messageBubble.addEventListener('click', this._onMessageBubbleClick.bind(this));
  //   return messageBubble;
  // }
}

customElements.define('message-form', MessageForm);

export default MessageForm;
