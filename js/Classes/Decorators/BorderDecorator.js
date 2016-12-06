import Decorator from './Decorator.js';

class BorderDecorator extends Decorator {
    constructor(visualComponent) {
        super(visualComponent);
    }

    getNode() {
        let decoratedNode = this.domNode.getNode();
        decoratedNode.className += ' bordered';
        return decoratedNode;
    }
}

export default BorderDecorator;