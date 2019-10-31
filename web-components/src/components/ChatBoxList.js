import ChatBox from './ChatBox';
import Header from './Header';
import MessageForm from './MessageForm';
import ChatBubble from './ChatBubble';
import * as Utils from './StorageUtils';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
        }
        
        .main-window {
            display:flex;
            flex-direction: column;
            height:100%;
        }
        
        .chat-list-window {
            display: inline; 
            height:100%;
            overflow: auto;
        }
        
        .chat-list {
            display: flex;
            flex-direction: column;
            height:100%;
            overflow: auto;
        }
        
        .create-chat-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .create-chat-input {
            diplay:none;
            align-self: flex-start;
        }
        
        .create-chat-button {
            position: absolute;
            
            bottom: 10px;
            right: 10px;
            width: 80px;
            height: 80px;
            align-self: flex-end;
            margin-bottom: 1vh;
            margin-left: 1vh;
            margin-right: 1vh;
            border-radius: 100%;
            background-color: greenyellow;  
            border:none;
        }
        
        .create-chat-button:focus {
             outline: none;
        }  
           
        .create-chat-button:hover {
          background-color: yellow;
        }
        
        .create-chat-button:active { 
          background-color: darkolivegreen;
        }
    
        .create-chat-img {
        }
    
        .create-chat-button > .create-chat-img  path{
           fill: #bbb;
        }
        
        
        @keyframes open-message-form-animation {
        
        }
        
        @keyframes open-chatlist-animation {
        
        }
        
    </style>
    
    <div class="main-window">

        
        <chat-header></chat-header>
        <div class = "chat-list-window">
        <div class="chat-list"></div>
    
    <button class="create-chat-button"> 
    <svg class="create-chat-image" width="50px" height="50px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -2319.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M138.229706,2163.463 L139.648153,2161.977 L141.070621,2163.466 L139.651169,2164.952 L138.229706,2163.463 Z M127.920583,2177.236 L126.498115,2175.747 L136.808243,2164.952 L138.229706,2166.44 L127.920583,2177.236 Z M139.821061,2159 L124,2175.747 L124,2179 L127.920583,2179 L144,2162.859 L139.821061,2159 Z" id="pen-[#1319]"></path>
            </g>
        </g>
    </g>
</svg>
    </button>
    </div>
    </div>
    

`;

class ChatBoxList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$header = this._shadowRoot.querySelector('chat-header');
    this.$mainWindow = this._shadowRoot.querySelector('.main-window');
    this.$chatListWindow = this._shadowRoot.querySelector('.chat-list-window');
    this.$chatList = this._shadowRoot.querySelector('.chat-list');
    this.$createChatButton = this._shadowRoot.querySelector('.create-chat-button');

    this.$createChatButton.addEventListener('click', this._onCreateChatButtonClicked.bind(this));
    this.$header.addEventListener('backClicked', this._onHeaderBackClicked.bind(this));

    //this.$messageFormBuffer = [];
  }

  connectedCallback() {
    this.loadFromStorage();
    this.defaultChats();
  }

  defaultChats() {
    const chatBoxes = this.$chatList.querySelectorAll('chat-box');
    const idSet = new Set();
    chatBoxes.forEach((box) => {
      idSet.add(box.chatId);
    });
    let isChatListChanged = false;
    if (!idSet.has('3')) {
      const chat3 = this._createChatBox();
      this.$chatList.prepend(chat3);
      chat3.avatar = 'images/pic_3.png';
      chat3.name = 'Another Person';
      chat3.text = 'Long text Long text Long text Long text Long text Long text Long text Long textLong text';
      chat3.time = new Date(2017, 4, 5, 6, 7, 8);
      chat3.status = 'notGivenStatus';
      chat3.chatId = 3;
      const storageKey = Utils.chatStorageKey('3');
      const message = document.createElement('chat-bubble');
      const messages = [];
      message.className = 'their';
      message.content = 'Long text Long text Long text Long text Long text Long text Long text Long textLong text';
      message.time = new Date(2017, 4, 5, 6, 7, 8);
      message.status = 'notGivenStatus';
      message.profileId = '2';
      messages.push(message.toObj());
      localStorage.setItem(storageKey, JSON.stringify(messages));
      isChatListChanged = true;
    }

    if (!idSet.has('2')) {
      const chat2 = this._createChatBox();
      this.$chatList.prepend(chat2);
      chat2.avatar = 'images/pic_2.jpg';
      chat2.name = '一些中國人';
      chat2.text = '這是日本像形文字的例子😀😀😀😀😀';
      chat2.time = new Date(2019, 2, 3, 1, 2, 9);
      chat2.status = 'notReadStatus';
      chat2.chatId = 2;
      const storageKey = Utils.chatStorageKey('2');
      const message = document.createElement('chat-bubble');
      const messages = [];
      message.className = 'their';
      message.content = '這是日本像形文字的例子😀😀😀😀😀';
      message.time = new Date(2019, 2, 3, 1, 2, 9);
      message.status = 'notReadStatus';
      message.profileId = '2';
      messages.push(message.toObj());
      localStorage.setItem(storageKey, JSON.stringify(messages));
      isChatListChanged = true;
    }

    if (!idSet.has('1')) {
      const chat1 = this._createChatBox();
      this.$chatList.prepend(chat1);
      chat1.avatar = 'images/pic_1.jpg';
      chat1.chatId = 1;
      chat1.name = 'Some Person';
      chat1.text = 'chats are not sorted by time';
      chat1.time = new Date(2013, 1, 1, 12, 45, 56);
      chat1.status = 'haveReadStatus';
      const storageKey = Utils.chatStorageKey('1');
      const message = document.createElement('chat-bubble');
      const messages = [];
      message.className = 'their';
      message.content = 'chats are not sorted by time';
      message.time = new Date(2013, 1, 1, 12, 45, 56);
      message.status = 'haveReadStatus';
      message.profileId = '2';
      messages.push(message.toObj());
      localStorage.setItem(storageKey, JSON.stringify(messages));
      isChatListChanged = true;
    }
    if (isChatListChanged === true)
      this.saveAllToStorage();
  }

  loadFromStorage() {
    this.$chatList.innerHTML = '';
    try {
      const chatListString = localStorage.getItem('chats');
      if (chatListString === null)
        return;
      const chatList = JSON.parse(chatListString);
      const boxArray = [];
      Object.keys(chatList).forEach((id) => {
        const chatBox = this._createChatBox();
        boxArray.push(chatBox);
        chatBox.chatId = id;
        chatBox.fromObj(chatList[id]);
      });
      boxArray.forEach((box) => {
        this.$chatList.appendChild(box); // TODO sorted by time
      });
    } catch (e) {
      localStorage.clear();
      throw e;
    }
  }

  saveAllToStorage() {
    try {
      const chatBoxes = this.$chatList.querySelectorAll('chat-box');
      const chatList = {};
      chatBoxes.forEach((box) => {
        chatList[box.chatId] = box.toObj();
      });
      localStorage.setItem('chats', JSON.stringify(chatList));
    } catch (e) {
      localStorage.clear();
      throw e;
    }
  }

  saveToStorage(chat) {
    try {
      const chatList = JSON.parse(localStorage.getItem('chats'));
      chatList[chat.chatId] = chat.toObj();
      localStorage.setItem('chats', JSON.stringify(chatList));
    } catch (e) {
      localStorage.clear();
      throw e;
    }
  }

  _createChatBox() {
    const chat = document.createElement('chat-box');
    chat.addEventListener('click', this._onChatboxClick.bind(this));
    return chat;
  }


  _onChatboxClick(event) {
    const chatBox = event.target.closest('chat-box');
    const newMessageForm = document.createElement('message-form');
    this.$chatListWindow.style.display = 'none';
    this.$mainWindow.appendChild(newMessageForm);
    this.$header.toMessageHeader();
    //this.$messageFormBuffer.push(newMessageForm);
    this.activeMessageForm = newMessageForm;
    this.activeChatBox = chatBox;
    this.$header.avatar = chatBox.avatar;
    this.$header.name = chatBox.name;
    this.$header.status = 'был 123 минут назад';
    newMessageForm.chatId = chatBox.chatId;
    newMessageForm.loadFromStorage();
  }

  _onCreateChatButtonClicked(event) {
    const newChat = document.createElement('chat-box');
    newChat.addEventListener('click', this._onChatboxClick.bind(this));
    newChat.chatId = Utils.generateChatId();
    newChat.avatar = 'images/default_image.png';
    newChat.name = 'First name Second Name';
    newChat.text = 'Enter your first message';
    newChat.time = new Date();
    newChat.status = '';
    this.$chatList.prepend(newChat);
    this.saveToStorage(newChat);
  }

  _onHeaderBackClicked(event) {
    const lastMessage = this.activeMessageForm.lastMessage();
    if (lastMessage !== null) {
      this.activeChatBox.text = lastMessage.content;
      this.activeChatBox.time = lastMessage.time;
      this.activeChatBox.status = lastMessage.status;
      this.saveToStorage(this.activeChatBox);
    }
    this.$mainWindow.removeChild(this.activeMessageForm);
    //this._shadowRoot.querySelector('message-form').style.display = 'none';
    this.$chatListWindow.style.display = 'inline';
  }
}

customElements.define('chatbox-list', ChatBoxList);

export default ChatBoxList;
