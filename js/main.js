'use strict';

(function(){

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


    let processArticles = (articles) => {
        let articleSectionWrapper = document.getElementById('articles-container');
        articles.map(function(article) {
            let articleItem = new Article(article);
            let articleNode = articleItem.getNode();
            articleSectionWrapper.appendChild(articleNode);
        });
    };

    const URL = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=228c7735e8f24e2aa20ce25be46e3d24';
    let myRequest = new Request(URL);

    fetch(myRequest)
        .then((response) => {
            if(response.status == 200) {
                return response.json();
            }
            else throw new Error('Something went wrong on api server!');
        })
        .then((response) => {
            processArticles(response.articles);
        })
        .catch(function(error) {
            console.error(error);
        });

})();

