class Editorials extends HTMLElement {
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

            .editorials ul{
                align-items: center;
                display:flex;
                gap: 0.5rem;
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 10.5px;
            }
            .editorials ul li:first-child::after{
                content: '|';
                margin-left: 10px
            } 
            .editorials ul li:nth-child(2)::after{
                content: '|';
                margin-left: 10px
            }
        </style>

        <div class="editorials">
            <ul>
                <li>MALLORCA</li>
                <li>MENORCA</li>
                <li>IBIZA Y FORMENTERA</li>
            </ul>
        </div
          
        `
    }
  }
  
  customElements.define('editorials-component', Editorials)