var Static = {
    URL_BASE: 'https://newsapi.org/v1/articles',

    PARAMS_SOURCE: 'source=bbc-news',
    PARAMS_KEY: 'apiKey=228c7735e8f24e2aa20ce25be46e3d24'
};

var Constants = {
    URL: Static.URL_BASE + '?' + Static.PARAMS_SOURCE + '&' + Static.PARAMS_KEY
};


module.exports = Constants;