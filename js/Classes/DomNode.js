class DomNode {

    static createArticleNode(article) {
        let articleNode = document.createElement('article');
        articleNode.className = "article-node";

        if(article.urlToImage) {
            let image = this.createImageNode(article.urlToImage, 'article-node-image');
            articleNode.appendChild(image);
        }

        if(article.url && article.title) {
            let title = this.createTextNode('h3', article.title, 'article-node-title');
            let link = this.createLinkNode(article.url, '', 'article-node-link');
            link.appendChild(title);
            articleNode.appendChild(link);
        }
        else if(article.title) {
            let title = this.createTextNode('h3', article.title, 'article-node-title');
            articleNode.appendChild(title);
        }

        if(article.description) {
            let description = this.createTextNode('p', article.description, 'article-node-description');
            articleNode.appendChild(description);
        }

        if(article.author) {
            let author = this.createTextNode('p', article.author, 'article-node-author');
            articleNode.appendChild(author);
        }

        if(article.publishedAt) {
            let publishedAt = this.createTextNode('p', article.publishedAt, 'article-node-published-at');
            articleNode.appendChild(publishedAt);
        }

        return articleNode;
    }

    static createTextNode(type, text, className) {
        let textNode = document.createElement(type);
        textNode.className = className;
        textNode.innerHTML = text;

        return textNode;
    }

    static createLinkNode(href, text, className) {
        let linkNode = document.createElement('a');
        linkNode.className = className;
        linkNode.href = href;
        linkNode.innerHTML = text;

        return linkNode;
    }

    static createImageNode(src, className) {
        let imageNode = document.createElement('img');
        imageNode.className = className;
        imageNode.src = src;

        return imageNode;
    }

}

export default DomNode;