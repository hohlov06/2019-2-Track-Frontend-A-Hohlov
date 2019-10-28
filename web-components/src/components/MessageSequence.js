import ChatBubble from './ChatBubble';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
        }
        
    </style>
    
`;

class MessageSequence extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('message-sequence', MessageSequence);

export default MessageSequence;
