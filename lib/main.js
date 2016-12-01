'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('babel-polyfill');
require('whatwg-fetch');

(function () {
    var DomNode = function () {
        function DomNode() {
            _classCallCheck(this, DomNode);
        }

        _createClass(DomNode, null, [{
            key: 'createArticleNode',
            value: function createArticleNode(article) {
                var articleNode = document.createElement('article');
                articleNode.className = "article-node";

                if (article.urlToImage) {
                    var image = this.createImageNode(article.urlToImage, 'article-node-image');
                    articleNode.appendChild(image);
                }

                if (article.url && article.title) {
                    var title = this.createTextNode('h3', article.title, 'article-node-title');
                    var link = this.createLinkNode(article.url, '', 'article-node-link');
                    link.appendChild(title);
                    articleNode.appendChild(link);
                } else if (article.title) {
                    var _title = this.createTextNode('h3', article.title, 'article-node-title');
                    articleNode.appendChild(_title);
                }

                if (article.description) {
                    var description = this.createTextNode('p', article.description, 'article-node-description');
                    articleNode.appendChild(description);
                }

                if (article.author) {
                    var author = this.createTextNode('p', article.author, 'article-node-author');
                    articleNode.appendChild(author);
                }

                if (article.publishedAt) {
                    var publishedAt = this.createTextNode('p', article.publishedAt, 'article-node-published-at');
                    articleNode.appendChild(publishedAt);
                }

                return articleNode;
            }
        }, {
            key: 'createTextNode',
            value: function createTextNode(type, text, className) {
                var textNode = document.createElement(type);
                textNode.className = className;
                textNode.innerHTML = text;

                return textNode;
            }
        }, {
            key: 'createLinkNode',
            value: function createLinkNode(href, text, className) {
                var linkNode = document.createElement('a');
                linkNode.className = className;
                linkNode.href = href;
                linkNode.innerHTML = text;

                return linkNode;
            }
        }, {
            key: 'createImageNode',
            value: function createImageNode(src, className) {
                var imageNode = document.createElement('img');
                imageNode.className = className;
                imageNode.src = src;

                return imageNode;
            }
        }]);

        return DomNode;
    }();

    var Article = function () {
        function Article(fieldsObj) {
            _classCallCheck(this, Article);

            this.author = fieldsObj.author;
            this.description = fieldsObj.description;
            this.publishedAt = fieldsObj.publishedAt;
            this.title = fieldsObj.title;
            this.url = fieldsObj.url;
            this.urlToImage = fieldsObj.urlToImage;
        }

        _createClass(Article, [{
            key: 'getNode',
            value: function getNode() {
                return DomNode.createArticleNode(this);
            }
        }]);

        return Article;
    }();

    var processArticles = function processArticles(articles) {
        var articleSectionWrapper = document.getElementById('articles-container');
        articles.map(function (article) {
            var articleItem = new Article(article);
            var articleNode = articleItem.getNode();
            articleSectionWrapper.appendChild(articleNode);
        });
    };

    var URL = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=228c7735e8f24e2aa20ce25be46e3d24';
    var myRequest = new Request(URL);

    fetch(myRequest).then(function (response) {
        if (response.status == 200) {
            return response.json();
        } else throw new Error('Something went wrong on api server!');
    }).then(function (response) {
        processArticles(response.articles);
    }).catch(function (error) {
        console.error(error);
    });
})();