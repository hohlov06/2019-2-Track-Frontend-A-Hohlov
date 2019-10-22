const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
        

        .container {
            width: 400px;
            padding: 10px;
        }
        
        .message-their {
            position: relative;
            margin-left: 20px;
            margin-bottom: 10px;
            padding: 10px;
            background-color: #A8DDFD;
            width: 200px;
            height: 50px;
            text-align: left;
            font: 400 .9em 'Open Sans', sans-serif;
            border: 1px solid #97C6E3;
            border-radius: 10px;
        }
        
        .message-mine {
            position: relative;
            margin-bottom: 10px;
            margin-left: calc(100% - 240px);
            padding: 10px;
            background-color: #f8e896;
            width: 200px;
            height: 50px;
            text-align: left;
            font: 400 .9em 'Open Sans', sans-serif;
            border: 1px solid #dfd087;
            border-radius: 10px;
        }
        
        .message-content {
            padding: 0;
            margin: 0;
        }
        
        .message-timestamp-mine {
            position: absolute;
            font-size: .85em;
            font-weight: 300;
            bottom: 5px;
            right: 5px;
        }
        
        .message-timestamp-their {
            position: absolute;
            font-size: .85em;
            font-weight: 300;
            bottom: 5px;
            left: 5px;
        }
        
        .message-their:after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-top: 15px solid #A8DDFD;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            top: 0;
            left: -15px;
        }
        
        .message-their:before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-top: 17px solid #97C6E3;
            border-left: 16px solid transparent;
            border-right: 16px solid transparent;
            top: -1px;
            left: -17px;
        }
        
        .message-mine:after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-bottom: 15px solid #f8e896;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            bottom: 0;
            right: -15px;
        }
        
        .message-mine:before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            border-bottom: 17px solid #dfd087;
            border-left: 16px solid transparent;
            border-right: 16px solid transparent;
            bottom: -1px;
            right: -17px;
        }
        
    </style>
        
    <div class="message-bubble">
    </div>
`;

class ChatBubble extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$messageBubble = this._shadowRoot.querySelector('.message-bubble');
  }

}

customElements.define('chat-bubble', ChatBubble);
