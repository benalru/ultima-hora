class New extends HTMLElement {
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

          h2{
            margin: 0;
          }

          .new{
            display: flex;
            flex-direction: column;
            gap: 0.5rem; 
            width: 100%;
          }

          .picture{
            width: max-content;
          }

          .category{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-style: normal; 
            font-size: 0.8rem;
            color: #cd0000;
          }
          
          .title{
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            margin-right: 0%;
            font-size: 14.5px;
          }

          .description{
            margin-right: 0%;
            padding: 0%;
            font-family: Georgia, 'Times New Roman', Times, serif;
          }

          .author a{
            font-family: "Roboto", sans-serif;
            font-size: 0.8rem;
            color: grey;
            text-decoration: none;
          }
          .author a:hover{
            color: #cd0000;
          }
          .main-row .title{
            font-size: 22px;
            margin-right: 30%;
          }

          .main-row .category{
            font-size: 12px;
            background-color: #333;
            color: #ffffff;
            padding: 0.2rem 0.65rem;
            margin-right: 86.5%;
          }
        </style>

        <div class="new"></div>
      `

      const newElement = this.shadow.querySelector('.new')

      if(this.getAttribute('image') !== ""){
        const picture = document.createElement('div')
        picture.classList.add('picture')
        newElement.appendChild(picture)
  
        const image = document.createElement('img')
        image.src = this.getAttribute('image')
        picture.appendChild(image)
      }
     
      if(this.getAttribute('category') !== ""){
        const category = document.createElement('div')
        category.classList.add('category')
        newElement.appendChild(category)

        const categoryText = document.createElement('h3')
        categoryText.textContent = this.getAttribute('category')
        category.appendChild(categoryText)
      }

      if(this.getAttribute('title') !== ""){
        const title = document.createElement('div')
        title.classList.add('title')
        newElement.appendChild(title)

        const titleText = document.createElement('h2')
        titleText.textContent = this.getAttribute('title')
        title.appendChild(titleText)
      }

      if(this.getAttribute('description') !== ""){
        const description = document.createElement('div')
        description.classList.add('description')
        newElement.appendChild(description)

        const descriptionText = document.createElement('p')
        descriptionText.textContent = this.getAttribute('description')
        description.appendChild(descriptionText)
      }

      if(this.getAttribute('author') !== ""){
        const author = document.createElement('div')
        author.classList.add('author')
        newElement.appendChild(author)

        const authorLink = document.createElement('a')
        authorLink.href = "https://www.ultimahora.es/autor/nekane-domblas.html"
        author.appendChild(authorLink)

        const authorText = document.createElement('span')
        authorText.textContent = this.getAttribute('author')
        authorLink.appendChild(authorText)
      }
    }
  }
  
  customElements.define('new-component', New)