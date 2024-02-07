class HelloWorld extends HTMLElement {
    constructor() {
        super(); //Aqui chama o construtor do HTMLElement

        const shadow = this.attachShadow({mode: "open"}); //Define essa constante para ser um Shadow DOM
        shadow.innerHTML = "<h1>Hello Worlder</h1>"; // Qual é o elementos que serão escritos
    }
}

customElements.define("hello-world", HelloWorld) //Aqui define como vai ser chamado o elemento novo
                //Nome do element // Qual classe vai
                                  // ser usada no novo elemento
//O nome sempre deve ter traço