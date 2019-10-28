import { notGivenStatus, notReadStatus, notSentStatus, haveReadStatus } from './SvgConstants'

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
        }
        
        .chatbox-container {
            display: flex;
            flex-direction: row;
            height: 5vh;
        }

        .chatbox-avatar {
            flex: 1 1 5%;
        }
        
        .chatbox-content {
            flex: 1 1 90%;
            display: flex;
            flex-direction: column;
        }
        
        .chatbox-author {
            font-size: 150%;
            flex: 1 1 30%;
        }
        
        .chatbox-text {
            flex: 1 1 70%;
        }
        
        .chatbox-info {
          flex: 1 1 5%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
        
        .chatbox-time {
            color: bbb;
        }
        
        .chatbox-status {
            
        }                                  
                              
    </style>
    
    <div class="chatbox-container">
        <img class="chatbox-avatar">
        </img>
        <span class="chatbox-content">
            <div class="chatbox-author">
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
    this.$author = this.$content.querySelector('.chatbox-author');
    this.$text = this.$content.querySelector('.chatbox-text');
    this.$info = this.$container.querySelector('.chatbox-info');
    this.$time = this.$info.querySelector('.chatbox-time');
    this.$status = this.$info.querySelector('.chatbox-status');
  }

  set avatar(src) {
    this.$avatar.src = src;
  }

  get avatar() {
    return this.$avatar.src;
  }

  set author(value) {
    this.$author.innerHTML = value;
  }

  get author() {
    return this.$author.value;
  }

  set text(value) {
    this.$text.innerHTML = value;
  }

  get text() {
    return this.$text.value;
  }

  set time(value) {
    this.$time.innerHTML = value;
  }

  get time() {
    return this.$time.value;
  }

  set status(value) {
    if (typeof (value) === 'string') {
      if (value === 'notSentStatus') this.$status.innerHTML = notSentStatus;
      else if (value === 'notGivenStatus') this.$status.innerHTML = notGivenStatus;
      else if (value === 'notReadStatus') this.$status.innerHTML = notReadStatus;
      else if (value === 'haveReadStatus') this.$status.innerHTML = haveReadStatus; // TODO messages number
    }
  }

  get status() {
    return this.$status.className;
  }
}

customElements.define('chat-box', ChatBox);

export default ChatBox;
