const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
        
    </style>
    

`;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

  }


}

customElements.define('chat-list', ChatList);
