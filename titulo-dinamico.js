class TituloDinamico extends HTMLElement {
    constructor() {
        super(); //Aqui chama o construtor do HTMLElement

        const shadow = this.attachShadow({mode: "open"}); //Define essa constante para ser um Shadow DOM
        
        //base do component - <h1>Daniel</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar o component - CSS (só existe aqui no component)
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;
        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-crazy", TituloDinamico) //Aqui define como vai ser chamado o elemento novo
                //Nome do element // Qual classe vai
                                  // ser usada no novo element
//O nome sempre deve ter traço