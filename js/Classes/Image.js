import DomNode from './DomNode.js';

class Image extends DomNode {

    constructor(src, className) {
        super();
        this.imageNode = document.createElement('img');
        this.imageNode.className = className;
        this.imageNode.src = src;
    }

    getNode() {return this.imageNode;}
}

export default Image;