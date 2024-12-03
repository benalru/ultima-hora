class UserArea extends HTMLElement {
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
            .user-area{
                align-items: center;
                display: flex;
                justify-content: right;
                gap: 0.5rem;
            }

            .log-in button{
                align-items: center;
                gap: 0.2rem;
                justify-content: space-between;
                display: flex;
                padding: 0.2rem 0.7rem;
                background-color: #e6e6e6;
                border-radius: 5px;
            }

            .log-in button span{
                font-family: "Roboto", serif;
            }

            .log-in button svg{
                height: 1.5rem;
                width: 1.5rem;
            }
            
            .sign button{
                padding: 0.5rem 0.7rem;
                background-color: #ffc700;
                border-radius: 5px;
                font-style: italic;
                font-family: 'Times New Roman', Times, serif;
                font-weight: bold;
                font-size: 16;
            }
        </style>    
        <div class="user-area">
            <div class="log-in">
                <button>
                    <span>Iniciar sesión</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M7.05 6.6L5.99 5.54c3.57-3.46 9.27-3.37 12.73.19s3.37 9.27-.19 12.73-9.27 3.37-12.73-.19c-.1-.1-.2-.21-.3-.32l1.06-1.06c2.7 3.14 7.43 3.51 10.58.81s3.51-7.43.81-10.58-7.43-3.51-10.58-.81c-.11.09-.22.19-.32.29z"></path>
                        <path d="M5.86 12.29H0v-1.5h5.86M12.5 18c1.01 0 1.99-.26 2.86-.77.86-.47 1.6-1.15 2.14-1.97-.01-.52-.33-.99-.94-1.42-.53-.37-1.21-.66-2.04-.9-.75-.2-1.42-.31-2.03-.31s-1.28.1-2.03.31c-.83.23-1.5.53-2.02.9-.61.43-.93.91-.94 1.42.54.82 1.28 1.5 2.14 1.97.91.51 1.86.77 2.86.77zm0-11c-.44 0-.85.11-1.24.35A2.563 2.563 0 0010 9.54c0 .45.11.87.34 1.26.23.39.53.71.92.94a2.4 2.4 0 002.48 0c.39-.23.69-.54.92-.94.23-.39.34-.81.34-1.26 0-.45-.11-.87-.34-1.26-.22-.39-.54-.71-.92-.93A2.4 2.4 0 0012.5 7z"></path>
                        <path d="M3.68 8.61v5.87h-1.5V8.61"></path>
                    </svg>
                </button>
            </div>
            <div class="sign">
                <button>Regístrate</button>
            </div>
        </div>
        `
    }
  }
  
  customElements.define('user-area-component', UserArea)