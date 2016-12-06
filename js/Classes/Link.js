import DomNode from './DomNode.js';

class Link extends DomNode {

    constructor(href, text, className) {
        super();
        this.linkNode = document.createElement('a');
        this.linkNode.className = className;
        this.linkNode.href = href;
        this.linkNode.innerHTML = text;
    }

    getNode() {return this.linkNode;}
}

export default Link;