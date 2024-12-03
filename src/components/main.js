class Main extends HTMLElement {
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
            *{
              box-sizing: border-box;
            }
            
            main{
                align: center;
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                margin-top: 15px;
                padding: 0 20%;
                width: 100%;
            }
        </style>
        <main>
          <slot></slot>
        </main>
        `
    }
  }
  
  customElements.define('main-component', Main)