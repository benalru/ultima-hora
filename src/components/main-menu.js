class MainMenu extends HTMLElement {
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
          ul{
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .main-menu ul{
            align-items: center;
            display: flex;
            gap: 2rem;
            background-color:#e6e6e6;
            margin-top: 5px;
            padding: 0.5rem 20%;
            font-size: 12px;
            font-weight: bold;
          }
      
          .main-menu ul li{
            font-family: "Roboto Condensed", sans-serif;
            font-size: 0.9rem;
            color: #323232;
          }
      
          .main-menu ul li svg{ 
            height: 1.2rem;
            width: 1.2rem;
            color: #323232;
          }
        </style>    

        <div class="main-menu">
          <ul>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4l8 7.77-1.5 1.46-6.5-6.3-6.49 6.3L4 11.77 12 4zM6.29 19v-4.98L12 8.61l5.71 5.4V19h-4.08v-4.53h-3.26V19H6.29z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></li>
            <li>NOTICIAS</li>
            <li>SUCESOS</li>
            <li>DEPORTES</li>
            <li>OPINIÓN</li>
            <li>XALOC</li>
            <li>PARTICIPA</li>
            <li>OCIO</li>
            <li>VIPS</li>
            <li>GUÍA ÚTIL</li>
            <li>SIURELLS CLUB VALORES</li>
            <li>MONOGRÁFICOS</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M195.55 173.79l-41.22-41.22c9.94-14.34 14.9-30.32 14.9-47.95 0-11.47-2.22-22.42-6.67-32.88-4.45-10.45-10.46-19.47-18.03-27.04s-16.58-13.59-27.04-18.03C107.03 2.22 96.08 0 84.62 0 73.16 0 62.2 2.22 51.74 6.67 41.28 11.11 32.27 17.13 24.7 24.7c-7.58 7.57-13.58 16.59-18.03 27.04C2.22 62.2 0 73.15 0 84.62c0 11.46 2.22 22.42 6.67 32.88 4.45 10.45 10.46 19.47 18.03 27.04 7.57 7.56 16.59 13.58 27.04 18.03 10.46 4.44 21.42 6.67 32.87 6.67 17.63 0 33.62-4.98 47.96-14.91l41.22 41.1c2.89 3.05 6.49 4.58 10.82 4.58 4.25 0 7.87-1.51 10.87-4.51 3.01-3 4.51-6.63 4.51-10.88s-1.47-7.86-4.44-10.83zm-72.89-51.13c-10.54 10.53-23.22 15.8-38.04 15.8s-27.5-5.26-38.04-15.8c-10.54-10.54-15.81-23.22-15.81-38.04s5.27-27.51 15.81-38.04c10.54-10.53 23.21-15.81 38.04-15.81s27.5 5.28 38.04 15.81c10.54 10.53 15.81 23.22 15.81 38.04s-5.28 27.5-15.81 38.04z"></path></svg></li>
          </ul>
        </div>
        `
    }
  }
  
  customElements.define('main-menu-component', MainMenu)