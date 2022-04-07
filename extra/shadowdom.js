class MeuCirculo extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: 'open'})

        const raiz = document.createElement('span')
        raiz.setAttribute('class', 'raiz')

        const texto = document.createElement('span')
        texto.setAttribute('class', 'texto')
        texto.textContent = this.getAttribute('texto')

        raiz.appendChild(texto)

        const style = document.createElement('style')
        style.textContent = `
        .raiz {
            background-color:red;
            width: 200px;
            border-radius:100px;
            height: 200px;
        }

        .texto {
            font-size: 1em;
            color: white;
        }
        `
        shadow.appendChild(style)
        shadow.appendChild(raiz)
    }
    
}

customElements.define('meu-circulo', MeuCirculo)