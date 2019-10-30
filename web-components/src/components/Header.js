const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: row;
            border: 1px solid rgba(25, 25, 25, 0.32);
            background-color: dodgerblue;
            flex: 1 1 5%;
        }
        
      .chatlist-header {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
        width: calc(100% - 2px);
        align-items: center;
      }
      
      .message-header {
        display:none;
        flex-direction: row;
        justify-content:space-between;
        flex-wrap: nowrap;
        width: calc(100% - 2px);
        align-items: center;
      }
      
      .chatlist-info
      {
        flex: 1 1 90%;
        font-size: 200%;
        line-height: 100%;
        color: white;
      }
      
      .message-header-info
      {
        display: flex;
        flex: 1 1 90%;
        color: white;
        flex-direction: row;
        margin-left: 10px;
        margin-right: 10px;
      }
      
      .message-header-avatar {
        border-radius: 100%;
        width: 30px;
        height: 30px;
        align-self: center;
      }
      
      .message-header-info-content {
        padding-left: 5px;
        align-self: center;
      }
      
      .message-header-chat-name {
      
      }
      
      .message-header-info-status {
        color: #bbb;
      }
      
        
      .back-button:focus, .search-button:focus, .chat-options-button:focus, .settings-button:focus {
           outline: none;
      }  
         
      .back-button:hover, .search-button:hover, .chat-options-button:hover, .settings-button:hover {
        background-color: powderblue;
        animation: header-button-hover-animation;
      }

      .back-button:active, .search-button:active, .chat-options-button:active, .settings-button:active { 
        background-color: blueviolet;
        animation: header-button-active-animation;
      }
      
        
        .back-button, .search-button, .chat-options-button, .settings-button {
            margin-left: 1px;
            margin-right: 1px;
            border-radius: 100%;
            background-color: inherit;
            border:none;
        }
        
        .back-button, .settings-button {
        }
        
        .search-button, chat-options-button {
        }
        
        .header-pic {
            fill: white;
        }
        
        @keyframes header-button-hover-animation {
        
        }
        
        
        @keyframes header-button-active-animation {
        
        }
      
    </style>
           
    <div class="chatlist-header">
    
     <button class="settings-button">
        <svg class="settings-button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width = "30px" height = "30px" viewBox="200 -20 100 500" xml:space="preserve">
        <g>
        <path class="header-pic" d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8
            c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2
            c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8
            c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1
            c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8
            c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5
            l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6
            c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1
            l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1
            C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9
            c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8
            c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42
            c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8
            c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8
            c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2
            c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42
            c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6
            c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1
            c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8
            c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7
            c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z"/>
        <path class="header-pic" d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001
            z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z"/>
        </g>
    </svg>
    </button>
    
    <div class="chatlist-info">Messenger</div>
    
    <button class="search-button">
        <svg class="search-button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width = "30px" height = "30px" viewBox="200 -20 100 500" xml:space="preserve">
        <g>
        <path class="header-pic" d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
            s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
            S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
            S381.9,104.65,381.9,203.25z"/>
        </g>
        </svg>
    </button>
    
    </div>
    
    <div class="message-header">
    
    <button class="back-button">
        <svg class="back-button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width = "30px" height = "30px" viewBox="200 -20 100 500" xml:space="preserve">
        <g>
        <path class="header-pic" d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1
            l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5
            S480.975,230.025,473.475,230.025z"/>
        </g>
        </svg>
    </button>
    
    <div class="message-header-info">
        <img class="message-header-avatar">
        </img>
        <div class="message-header-info-content">
            <div class="message-header-chat-name"></div>
            <div class="message-header-info-status"></div>
        </div>
    </div>
   
    
    <button class="chat-options-button">
        <svg class="chat-options-button-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  width = "30px" height = "30px" viewBox="150 -70 100 500" xml:space="preserve">
        <g>
        <path class="header-pic" d="M204,102c28.05,0,51-22.95,51-51S232.05,0,204,0s-51,22.95-51,51S175.95,102,204,102z M204,153c-28.05,0-51,22.95-51,51
            s22.95,51,51,51s51-22.95,51-51S232.05,153,204,153z M204,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
            S232.05,306,204,306z"/>
        </g>
        </svg>
    </button>
    
    </div>
        

`;

class Header extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$settingsButton = this.shadowRoot.querySelector('.settings-button');
    this.$messageHeaderInfo = this.shadowRoot.querySelector('.message-header-info');
    this.$messageHeaderAvatar = this.shadowRoot.querySelector('.message-header-avatar');
    this.$messageHeaderContent = this.shadowRoot.querySelector('.message-header-info-content');
    this.$messageHeaderName = this.shadowRoot.querySelector('.message-header-chat-name');
    this.$messageHeaderStatus = this.shadowRoot.querySelector('.message-header-info-status');

    this.$backButton = this.shadowRoot.querySelector('.back-button');
    this.$searchButton = this.shadowRoot.querySelector('.search-button');
    this.$chatOptionsButton = this.shadowRoot.querySelector('.chat-options-button');
    this.$chatlistInfo = this.shadowRoot.querySelector('.chatlist-info');

    this.$messageHeader = this.shadowRoot.querySelector('.message-header');
    this.$chatlistHeader = this.shadowRoot.querySelector('.chatlist-header');

    this.$settingsButton.addEventListener('click', this._onSettingsClicked.bind(this));
    this.$backButton.addEventListener('click', this._onBackClicked.bind(this));
    this.$searchButton.addEventListener('click', this._onSearchClicked.bind(this));
    this.$chatOptionsButton.addEventListener('click', this._onChatOptionClicked.bind(this));
  }

  set avatar(value) {
    this.$messageHeaderAvatar.src = value;
  }

  get avatar() {
    return this.$messageHeaderAvatar.src;
  }

  set name(value) {
    this.$messageHeaderName.innerHTML = value;
  }

  get name() {
    return this.$messageHeaderName.innerHTML;
  }

  set status(value) {
    this.$messageHeaderStatus.innerHTML = value;
  }

  get status() {
    return this.$messageHeaderStatus.innerHTML;
  }

  toMessageHeader() {
    this.$messageHeader.style.display = 'flex';
    this.$chatlistHeader.style.display = 'none';
  }

  toChatHeader() {
    this.$messageHeader.style.display = 'none';
    this.$chatlistHeader.style.display = 'flex';
  }

  _onBackClicked(event) {
    this.toChatHeader();
    this.dispatchEvent(new Event('backClicked'));
  }

  _onSettingsClicked(event) {
    //this.toMessageHeader();
  }

  _onSearchClicked(event) {

  }

  _onChatOptionClicked(event) {

  }
}

customElements.define('chat-header', Header);

export default Header;
