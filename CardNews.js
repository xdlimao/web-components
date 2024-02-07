//Lembrando sempre de importar esse JS pro HTML com defer dentro do head
class CardNews extends HTMLElement {
    constructor() {
        super(); //Super importante usar isso, pois era usar o construtor do HTMLELement e assim fazer esse webcomponent funcionar
        const shadow = this.attachShadow({mode: "open"});
        //Essas funcções abaixos serão executadas quando o código web component for chamado.
        shadow.appendChild(this.build()); //esse appendChild adiciona ao Parent do shadowDom.
        shadow.appendChild(this.styles());// todo filho fica sendo um subdominio do parent exemplo: parent -> child. Ver explicação no txt ou pesquisar.
        //a função build é pra html e styles pra css
    }
    build(){
        //Div principal
        const componentRoot = document.createElement("div") //adicionamos uma div.
        componentRoot.setAttribute("class","card"); //definimos a classe card (se quiser id então .setAttribute("id", "card1")).
        
        //Div esquerda
        const cardLeft = document.createElement("div") //adicionamos outra div.
        cardLeft.setAttribute("class", "card__left") //definimos outra classe.

        const autor = document.createElement("span"); //adicionamos um span
        autor.textContent = "By " + this.getAttribute("autor") || "By Anonymous" //textContent = DOMAttribute ou DOM properties.
                                                                    //this.getAttribute("placeholder") = Prop(properties) ou atributo do elemento, ex: <test-component placeholder="peralta"></test-component>.
                                                                                // || (ou 2 Pipes) = Default; Caso o atributo em especifico não seja definido, irá acontecer algo por padrão.

        const linkTitle = document.createElement("a") //adicionamos um link
        linkTitle.textContent = this.getAttribute("title"); // adicionamos um texto dentro da tag pela propriedade do html que comece com "title".
        linkTitle.href = this.getAttribute("link-url") || "bing.com"; //Aqui acessamos um atributo que ja existe na tag a para o seu funcionamento, que é o href
                                                                    //podemos criar uma properties que acesse esse atributo da tag a, e caso não seja definido, || (2 pipes) e ação default

        const newsContent = document.createElement("p") //adicionamos um parágrafro.
        newsContent.textContent = this.getAttribute("content"); // adicionamos um texto dentro da tag pela propriedade do html que comece com "content".

        cardLeft.appendChild(autor); //adicionamos dentro da div card__left essas tags do html.
        cardLeft.appendChild(linkTitle);    
        cardLeft.appendChild(newsContent)
        /*Ou seja:
        <div class="card__left">                                            
            <span></span>
            <a></a>    
            <p></p>
        </div>
        */
        /*
            Por enquanto tudo ficou assim
            HTML(DOM): (no caso, o nome da tags está definido na linha 160)
            <body>
                <card-news autor="contéudo" title="conteúdo"
                link-url="conteúdo"
                content="conteúdo"></card-news>
            </body>
            WebComponent:
            <div class="card"></div>  (Percebeu que ainda está fora? continue lendo para vendo quando é adicionada)
            <div class="card__left">
                <span>contéudo</span>
                <a href="conteúdo">conteúdo</a>
                <p>conteúdo</p>
            </div>
        */

        //Div direita
        const cardRight = document.createElement("div") //criamos uma div.
        cardRight.setAttribute("class", "card__right") //definimos um atributo dela no DOM, caso ela vai ser: class="card__right".
        const newsImage = document.createElement("img") //criamos um elemento img.
        //newsImage.src = "gitcheats.jpg" //Adicionamos um atributo fixo ou:
        newsImage.src = this.getAttribute("photo") || "http://www.dvdmagazine.com.br/m2brimagem/resize/file/0c2ca2dbcee338fe6b99e237d915854c.jpg/width/80/height/110"
        newsImage.alt = "Comandos do Git" //Adicionando um atributo fixo.
        cardRight.appendChild(newsImage) //Adicionamos dentro da div card__right

        /*
            Por enquanto tudo ficou assim
            HTML(DOM): (no caso, o nome da tags está definido na linha 160)
            <body>
                <card-news autor="contéudo" title="conteúdo"
                link-url="conteúdo"
                content="conteúdo"
                photo="conteúdo"></card-news>
            </body>
            WebComponent:
            <div class="card"></div>  (Percebeu que ainda está fora? continue lendo para vendo quando é adicionada)
            <div class="card__left">
                <span>contéudo</span>
                <a href="conteúdo">conteúdo</a>
                <p>conteúdo</p>
            </div>
            <div class="card__right">
                <img src="contéudo" alt="contéudo">
            </div>
        */

        //Agora iremos adicionar as duas divs na div principal "card"
        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)
        
        /*
            Por enquanto tudo ficou assim
            HTML(DOM): (no caso, o nome da tags está definido na linha 160)
            <body>
                <card-news autor="contéudo" title="conteúdo"
                link-url="conteúdo"
                content="conteúdo"
                photo="conteúdo"></card-news>
            </body>
            WebComponent:
            <div class="card"> (Finalmente adicionamos dentro!)
                <div class="card__left">
                    <span>contéudo</span>
                    <a href="conteúdo">conteúdo</a>
                    <p>conteúdo</p>
                </div>
                <div class="card__right">
                    <img src="contéudo" alt="contéudo">
                </div>
            </div>
        */
        
        //Por fim, a função ira retornar essa constante componentRoot, e tudo que fizemos está ai dentro!
        return componentRoot;
    }
    styles(){
        //Aqui adicionamos o CSS para  o componente. Posso literalmente copiar e colar do meu CSS, ele serve só pro Component, não é global
        const style = document.createElement("style"); //Cria a tag Style
        style.textContent = `
        .card {
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          
          .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
          }
          
          .card__left > span {
            font-weight: 400;
          }
          
          .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
          }
          
          .card__left > p {
            color: rgb(70, 70, 70);
          }
        `; //adicionamos o contéudo que estará dentro da tag style.
          //e aqui no return, está a constante que tem todo o CSS.
        return style
    }
}
customElements.define("card-news", CardNews)
//customElements = nome da instancia de elementos customisaveis.
//.define() = método que define um novo elemento.
// Seus parametros de entrada pede um nome OBRIGÁTORIO com hífen e qual classe javascript está o webcomponent, só pode ser usado depois da classe estiver pronta.

//https://javascript.works-hub.com/learn/web-components-api-definition-attributes-and-props-886c0
//Esse link é bem legal para estudar
//Veja os outros arquivos também!