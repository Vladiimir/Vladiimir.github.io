import DomNode from '../DomNode.js';

class Decorator extends DomNode {

    constructor(domNode) {
        super();
        this.domNode = domNode;
    }

    getNode() {this.domNode.getNode();}
}

export default Decorator;