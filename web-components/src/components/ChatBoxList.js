import ChatBox from './ChatBox';
import Header from './Header';
import MessageForm from './MessageForm';

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
            display:flex;
            flex-direction: column;
            height:100%;
            justify-content: space-between;
        }
        
        .chat-list {
            display: flex;
            flex-direction: column;
        }        
        
        .create-chat-button {
            width: 100px;
            height: 100px;
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
    <div class="chat-list-window">
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
    this.$createChat = this._shadowRoot.querySelector('.create-chat-button');

    this.$createChat.addEventListener('click', this._onCreateChatClicked.bind(this));
    this.$header.addEventListener('backClicked', this._onHeaderBackClicked.bind(this));

    //this.$messageFormBuffer = [];
  }

  connectedCallback() {
    this.defaultChats();
  }

  defaultChats() {
    const chat1 = document.createElement('chat-box');
    this.$chatList.appendChild(chat1);
    //chat1.avatar = '/images/pic_1.png';
    chat1.author = 'Some Person';
    //chat1.text = 'allo';
    //chat1.time = '01:23';
    //chat1.status = 'haveReadStatus';
    //chat1.chatId = 1;

    chat1.addEventListener('click', this._onChatboxClick.bind(this));
  }

  _onChatboxClick(event) {
  }

  _onCreateChatClicked(event) {
    const newMessageForm = document.createElement('message-form');
    this.$chatListWindow.style.display = 'none';
    this.$mainWindow.appendChild(newMessageForm);
    this.$header.toMessageHeader();
    //this.$messageFormBuffer.push(newMessageForm);
    this.activeMessageForm = newMessageForm;
  }

  _onHeaderBackClicked(event) {
    this.$mainWindow.removeChild(this.activeMessageForm);
    //this._shadowRoot.querySelector('message-form').style.display = 'none';
    this.$chatListWindow.style.display = 'flex';
  }
}

customElements.define('chatbox-list', ChatBoxList);

export default ChatBoxList;
