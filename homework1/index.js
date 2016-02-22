var async = require('async')
    , QuotesManager = require("./QuotesManager");

async.forever(function run(next) {
    setTimeout(function(){
        QuotesManager.getQuote(function quoteRetrieved(err, quote){
            console.log(quote);
            next();
        });
    }, 5000);
});