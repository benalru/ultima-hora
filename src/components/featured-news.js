class FeaturedNews extends HTMLElement {
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
      
        .featured-news ul{
          align-items: center;
          display: flex;
          gap: 0.5rem;
          font-size: 12px;
          font-family: "Roboto", serif;
          font-weight: 400;
          font-style: normal;
        }

        .featured-news ul li:first-child{
            color: #cd0000;
            text-transform: uppercase;
            font-weight: bold;
        }

        .featured-news ul li:first-child::after{
            content: ':';
        }

        .featured-news ul li:nth-child(2)::after{
            content: '-';
            margin-left: 8px;
            font-family: "Roboto", serif;
            font-weight: 400;
            font-style: normal;
        }

        .featured-news ul li:nth-child(3)::after{
            content: '-';
            margin-left: 8px;
        }
        </style>
        
        <div class="featured-news">
          <ul>
            <li>Hoy es noticia</li>
            <li>Sueldos de los funcionarios</li>
            <li>Desalojo en Palma</li>
            <li>Agostina Rubini</li>
          </ul>
        </div>
      `
  }
}

customElements.define('featured-news-component', FeaturedNews)