import { notGivenStatus, notReadStatus, notSentStatus, haveReadStatus } from './SvgConstants'
import * as Utils from './StorageUtils';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            border-bottom: 1px solid #bbb;
            padding:2px;
            border-opacity: 25%;
            height: 45px;
        }
        
        .chatbox-container {
            margin: 2px;
            display: flex;
            flex-direction: row;
            
            user-select: none;
        }

        .chatbox-avatar {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            background-size: cover;
        }
        
        .chatbox-content {
            padding-left: 2px;
            flex: 1 1 90%;
            display: flex;
            flex-direction: column;
            white-space: nowrap;
            text-overflow: ellipsis; 
            overflow: hidden;
        }
        
        .chatbox-name {
            font-weight: bold;
        }
        
        .chatbox-text {
        }
        
        .chatbox-info {
          flex: 1 1 5%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
        
        .chatbox-time {
            font-size: 70% ;
            color: #bbb;
        }
        
        .chatbox-status {
            
        }                                  
                              
    </style>
    
    <div class="chatbox-container">
        <img class="chatbox-avatar">
        </img>
        <span class="chatbox-content">
            <div class="chatbox-name">
            </div>
            <div class="chatbox-text">
            </div>
        </span>
        <span class="chatbox-info">
            <div class="chatbox-time">
            </div>
            <div class="chatbox-status">
            </div>
        </span>
    </div>

`;


class ChatBox extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$container = this._shadowRoot.querySelector('.chatbox-container');
    this.$avatar = this.$container.querySelector('.chatbox-avatar');
    this.$content = this.$container.querySelector('.chatbox-content');
    this.$name = this.$content.querySelector('.chatbox-name');
    this.$text = this.$content.querySelector('.chatbox-text');
    this.$info = this.$container.querySelector('.chatbox-info');
    this.$time = this.$info.querySelector('.chatbox-time');
    this.$status = this.$info.querySelector('.chatbox-status');

    //this.addEventListener(this.$avatar, this._onAvatarClicked());
  }

  fromObj(obj) {
    this.avatar = obj.avatar;
    this.name = obj.name;
    this.text = obj.text;
    this.time = obj.time;
    this.status = obj.status;
  }

  toObj() {
    const obj = {};
    obj.avatar = this.avatar;
    obj.name = this.name;
    obj.text = this.text;
    obj.time = this.time;
    obj.status = this.status;
    return obj;
  }

  set chatId(value) {
    this._chatId = value;
  }

  get chatId() {
    return this._chatId;
  }

  set avatar(src) {
    this.$avatar.src = src;
  }

  get avatar() {
    return this.$avatar.src;
  }

  set name(value) {
    this.$name.innerHTML = value;
  }

  get name() {
    return this.$name.innerHTML;
  }

  set text(value) {
    this.$text.innerHTML = value;
  }

  get text() {
    return this.$text.innerHTML;
  }

  set time(value) {
    this.exactTime = new Date(value);
    this.$time.innerHTML = this.chatBoxTime(this.exactTime);
  }

  get time() {
    return this.exactTime;
  }

  set status(value) {
    this.statusCode = value;
    if (typeof (value) === 'string') {
      if (value === 'notSentStatus') this.$status.innerHTML = notSentStatus;
      else if (value === 'notGivenStatus') this.$status.innerHTML = notGivenStatus;
      else if (value === 'notReadStatus') this.$status.innerHTML = notReadStatus;
      else if (value === 'haveReadStatus') this.$status.innerHTML = haveReadStatus; // TODO messages number
      else this.$status.innerHTML = value;
    }
  }

  get status() {
    return this.statusCode;
  }

  chatBoxTime(time) {
    return Utils.hoursMinutes(time); // TODO gradations
  }
}

customElements.define('chat-box', ChatBox);

export default ChatBox;
