class NodeBuilder {
    constructor(nodeType) {
        this.nodeElement = document.createElement(nodeType);
    }

    setClassName(value) {
        this.nodeElement.className += value + ' ';
    }

    setHref(value) {
        this.nodeElement.href = value;
    }

    setSrc(value) {
        this.nodeElement.src = value;
    }

    setInnerHTML(value) {
        this.nodeElement.innerHTML = value;
    }

    getNode() {
        return this.nodeElement;}

}

export default NodeBuilder;