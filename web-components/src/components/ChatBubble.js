import { notGivenStatus, notReadStatus, notSentStatus, haveReadStatus } from './SvgConstants'

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
        margin: 1vh 3vh 1vh 3vh;
        max-width: 50vh;
        overflow-wrap: break-word;
        }
        
        :host(.mine) {
           align-self: flex-end;  
        }
        
        :host(.their) {
           align-self: flex-start;  
        }
        
        :host(.mine) .message-bubble {
            background-color: #EFFDDE;
        }
        
        :host(.their) .message-bubble {
            background-color: white;
        }
        
         :host(.mine) message-sequence .message-bubble:first-child:after {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 100% 0 0 100%;
            border-color: transparent transparent transparent #EFFDDE;
        }
        
        :host(.their) message-sequence .message-bubble:first-child:before {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 100% 100%;
            border-color: transparent transparent white transparent;
        }
        
        .message-bubble {
            display:flex;

            flex-direction: column;
            border-radius: 10px;
            max-width: 50vh;
            padding: 1vh;
        }
        
        
        .message-author {
            text-decoration: none;
        }
        
        .message-content {
            width: 100%;
            color: black;
        }
        
        .message-info {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
        }
        
        .message-additional-info {
            color: #bbb;
        }
        
        .message-time {
            color: #bbb;
        }
        
        .message-status {
        }
        
        :host svg.notSentStatus.notReadStatus.notGivenStatus.haveReadStatus {
        
        }
        
        :host(.mine) .message-author {
            display: none;
        }
        
        :host(.their) .message-author {
            display: flex;
        }

        :host(.mine) .message-status {
            display: flex;
        }
        
        :host(.their) .message-status {
            display: none;
        }        
        
    </style>
        
<div class="message-bubble">
    <a href="" class="message-author"></a>
    <div class="message-content"></div>
    <div class="message-info">
        <span class="message-additional-info"></span>
        <span class="message-time"></span>
        <span class="message-status"></span>
    </div>
</div>
`;


class ChatBubble extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$messageBubble = this._shadowRoot.querySelector('.message-bubble');
    this.$author = this.$messageBubble.querySelector('.message-author');
    this.$content = this.$messageBubble.querySelector('.message-content');
    this.$info = this.$messageBubble.querySelector('.message-info');
    this.$additionalInfo = this.$info.querySelector('.message-additional-info');
    this.$time = this.$info.querySelector('.message-time');
    this.$status = this.$info.querySelector('.message-status');
  }

  connectedCallback() {
    this.status = notSentStatus;
  }

  set author(value) {
    this.$author.innerHTML = value;
  }

  get author() {
    return this.$author.value;
  }

  set content(value) {
    this.$content.innerHTML = value;
  }

  get content() {
    return this.$content.value;
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
      else if (value === 'haveReadStatus') this.$status.innerHTML = haveReadStatus;
    }
  }

  get status() {
    return this.$status.className;
  }

  set additionalInfo(value) {
    this.$additionalInfo.innerHTML = value;
  }

  get additionalInfo() {
    return this.$additionalInfo.className;
  }
}

customElements.define('chat-bubble', ChatBubble);

export default ChatBubble;
