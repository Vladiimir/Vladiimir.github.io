import DomNode from './DomNode.js';
import Image from './Image.js';
import Link from './Link.js';
import Text from './Text.js';
import NodeBuilder from './Builders/NodeBuilder.js'
import BorderDecorator from './Decorators/BorderDecorator.js';

class Article extends DomNode {
    constructor(fieldsObj) {
        super();
        this.author = fieldsObj.author;
        this.description = fieldsObj.description;
        this.publishedAt = fieldsObj.publishedAt;
        this.title = fieldsObj.title;
        this.url = fieldsObj.url;
        this.urlToImage = fieldsObj.urlToImage;
    }

    getNode() {
        return this.createArticleNode(this);
    }

    createArticleNode(article) {
        let articleNode = document.createElement('article');
        articleNode.className = "article-node";

        if(article.urlToImage) {
            let image = new NodeBuilder('img');
            image.setClassName('article-node-image');
            image.setSrc(article.urlToImage);

            articleNode.appendChild(image.getNode());
        }

        if(article.url && article.title) {
            let title = new NodeBuilder('h3');
            title.setClassName('article-node-title');
            title.setInnerHTML(article.title);

            let link = new NodeBuilder('a');
            link.setClassName('article-node-link');
            link.setHref(article.url);
            link.getNode().appendChild(title.getNode());
            link = new BorderDecorator(link);

            articleNode.appendChild(link.getNode());
        }
        else if(article.title) {
            let title = new NodeBuilder('h3');
            title.setClassName('article-node-title');
            title.setInnerHTML(article.title);
            title = new BorderDecorator(title);

            articleNode.appendChild(title.getNode());
        }

        if(article.description) {
            let description = new NodeBuilder('p');
            description.setClassName('article-node-description');
            description.setInnerHTML(article.description);

            articleNode.appendChild(description.getNode());
        }

        if(article.author) {
            let author = new NodeBuilder('p');
            author.setClassName('article-node-author');
            author.setInnerHTML(article.author);

            articleNode.appendChild(author.getNode());
        }

        if(article.publishedAt) {
            let publishedAt = new NodeBuilder('p');
            publishedAt.setClassName('article-node-published-at v2');
            publishedAt.setInnerHTML(article.publishedAt);

            articleNode.appendChild(publishedAt.getNode());
        }

        return articleNode;
    }
}

export default Article;