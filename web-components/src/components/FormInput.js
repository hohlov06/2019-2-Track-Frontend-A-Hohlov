const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 2px);
        }

        :host {
            display: flex;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
        
        .attach-button,.send-button {
            align-self:flex-end;
            margin-left: 1vh;
            margin-right: 1vh;
            border-radius: 100%;
            background-color: transparent;
            border:none;
        }
        
      .attach-button:focus,.send-button:focus {
           outline: none;
      }  
         
      .attach-button:hover,.send-button:hover {
        background-color: powderblue;
      }
      .attach-button:active,.send-button:active { 
        background-color: blueviolet;
      }

      .attach-button-img,.send-button-img {
      }

    </style>
    <input type="text">
    <button class="attach-button">
        <svg class="attach-button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width = "5vh" height = "5vh" viewBox="-55 -5 100 120" xml:space="preserve">
          <g transform="scale(0.18) rotate(45)">
          <path d="M452.758,36.265c-48.354-48.354-127.045-48.354-175.399,0L62.657,250.967c-6.777,6.778-6.777,17.764,0,24.541
          c6.786,6.777,17.764,6.777,24.541,0L301.9,60.815c34.825-34.816,91.492-34.816,126.316,0
          c16.879,16.87,26.164,39.302,26.164,63.158c0,23.864-9.285,46.288-26.164,63.158L158.392,456.956
          c-23.621,23.63-62.073,23.63-85.695,0c-23.621-23.639-23.63-62.074,0-85.704l217.591-217.591
          c12.427-12.418,32.638-12.435,45.091,0c12.427,12.418,12.427,32.647,0,45.082L172.902,361.212c-6.777,6.777-6.777,17.764,0,24.541
          c6.786,6.778,17.764,6.778,24.55,0l162.469-162.469c25.956-25.964,25.956-68.209,0-94.165c-25.964-25.982-68.209-25.964-94.173,0
          l-217.6,217.591c-37.159,37.15-37.159,97.618,0,134.786c18.588,18.588,42.991,27.874,67.402,27.874s48.814-9.294,67.393-27.874
          l269.815-269.824c23.439-23.422,36.335-54.567,36.335-87.7C489.092,90.841,476.197,59.696,452.758,36.265z"/>
          </g>
        </svg>
    </button>
    <button class="send-button" type="submit">
        <svg class="send-button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width = "5vh" height = "5vh" viewBox="5 -10 100 100" xml:space="preserve">
        <g transform="scale(0.18)">
        <path d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616
            l-67.6-32.22V456.687z"/>
        <path d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422
            c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414
            l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956
            L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"/>
        </g>
        </svg>
    </button>
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
    this.$attachButton = this.shadowRoot.querySelector('.attach-button');
    this.$sendButton = this.shadowRoot.querySelector('.send-button');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  set value(value){
    this.$input.value = value;
  }
}

customElements.define('form-input', FormInput);
