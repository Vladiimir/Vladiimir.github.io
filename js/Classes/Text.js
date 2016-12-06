import DomNode from './DomNode.js';

class Text extends DomNode {

    constructor(type, text, className) {
        super();
        this.textNode = document.createElement(type);
        this.textNode.className = className;
        this.textNode.innerHTML = text;
    }

    getNode() {return this.textNode;}
}

export default Text;