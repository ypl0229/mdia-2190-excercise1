var banner_template = document.createElement("template");
banner_template.innerHTML = `
<style>
        #banner {
            background-color: aliceblue;
            display: flex;
        }

        #banner button {
            width: 30px;
            height: 30px;
            background-color: yellow;
            border: none;
            border-radius: 5px;
            margin: 5px;
        }

        #banner div {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        body {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #bar {
            width: 0px;
            height: 15px;
            background-color: cornflowerblue;
        }
    </style>
    <div id="banner">
        <button>-</button>
        <div>1</div>
        <button>+</button>
    </div>
    <div id="bar"></div>
    
`;

class TheBanner extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(banner_template.content.cloneNode(true));
    }
}


customElements.define("the-banner", TheBanner);