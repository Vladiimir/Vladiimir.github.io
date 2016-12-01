'use strict';

require('babel-polyfill');
require('whatwg-fetch');

import ProcessingService from './Services/ProcessingService.js';
import UrlConstants from './Constants/UrlConstants.js';

(function(){

    const URL = UrlConstants.URL;
    let myRequest = new Request(URL);

    fetch(myRequest)
        .then((response) => {
            if(response.status == 200) {
                return response.json();
            }
            else throw new Error('Something went wrong on api server!');
        })
        .then((response) => {
            ProcessingService.processArticles(response.articles);
        })
        .catch(function(error) {
            console.error(error);
        });

})();

