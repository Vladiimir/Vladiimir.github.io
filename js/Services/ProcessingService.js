import Article from '../Classes/Article.js';

module.exports = {
    processArticles: (articles) => {
        let articleSectionWrapper = document.getElementById('articles-container');
        articles.map(function(article) {
            let articleItem = new Article(article);
            let articleNode = articleItem.getNode();
            articleSectionWrapper.appendChild(articleNode);
        });
    }
};