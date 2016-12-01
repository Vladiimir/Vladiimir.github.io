import DomNode from './DomNode.js';

class Article{
    constructor(fieldsObj) {
        this.author = fieldsObj.author;
        this.description = fieldsObj.description;
        this.publishedAt = fieldsObj.publishedAt;
        this.title = fieldsObj.title;
        this.url = fieldsObj.url;
        this.urlToImage = fieldsObj.urlToImage;
    }

    getNode() {
        return DomNode.createArticleNode(this);
    }
}

export default Article;