const template = document.createElement('template');
template.innerHTML = `
    <style>
    
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
            margin-bottom: 0px;
            flex: 1 1 5%;

        }

        .result {
            color: red;
            background-color: lightskyblue;
            height: 85vh;
        }

        input[type=submit] {
            visibility: collapse;
        }
        
        chat-header {

        }
        
    </style>
    <form>
        <chat-header></chat-header>
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
    this.$message = this._shadowRoot.querySelector('.result');

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  _onSubmit(event) {
    event.preventDefault();
    this.$message.innerText = this.$input.value;
  }

  _onKeyPress(event) {
    if (event.keyCode == 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
