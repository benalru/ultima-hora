class Header extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    static get observedAttributes () {}
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
        /* html */`
        <style>
            header{
                align-items: center;
            }

            .header-top-bar{
                padding: 0.5rem 20%;
                align-items: center;
                display: flex;
                justify-content: space-between;
                background-color:#e6e6e6;
            }

            .header-main-bar{
                background-color: #cd0000;
                display: flex;
                justify-content: space-between;
                padding: 2rem 20%;
            }

            .header-bot-bar{
                
            }
        </style>
        <header>
            <div class="header-top-bar">
                <slot name="header-top-bar">
            </div>
            <div class="header-main-bar">
                <slot name="header-main-bar">
            </diV>
            <div class="header-bot-bar">
                <slot name="header-bot-bar">
            </div>
        </header>
        `
    }
  }
  
  customElements.define('header-component', Header)