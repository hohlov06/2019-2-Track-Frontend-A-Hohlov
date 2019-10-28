import ChatBubble from './ChatBubble';
import MessageSequence from './MessageSequence';
import FormInput from './FormInput';

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
  }

  _onSubmit(event) {
    event.preventDefault();
    if (this.$input.value.toString().trim() !== '') {
      const currentTime = new Date();
      const lastMessageBubble = document.createElement('chat-bubble');
      lastMessageBubble.className = 'mine';
      lastMessageBubble.content = this.$input.value;
      let currentMinutes = currentTime.getMinutes();
      if (currentMinutes < 10)
        currentMinutes = `0${currentMinutes}`;
      lastMessageBubble.time = `${currentTime.getHours()}:${currentMinutes}`;
      lastMessageBubble.status = 'notSentStatus';
      lastMessageBubble.className = 'mine';
      this.$messageList.append(lastMessageBubble);
      this.$messageList.scrollTop = this.$messageList.scrollHeight;
      // let storageItem = {};
      // localStorage.setItem();
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
}

customElements.define('message-form', MessageForm);

export default MessageForm;
