var request = require("request")
    , config = require("./config")
    , self = module.exports;

var options = {
    method: 'GET',
    url: config.quote.quoteAPI,
    headers: {
        'x-mashape-key': config.quote.quoteAPIKey
    }
};

self.getQuote = function getQuote(callback){
    request(options, function (error, response) {
        if (error) {
            callback(error);
        } else {
            try {
                var quote = JSON.parse(response.body);
                return callback(null, quote);
            } catch(e) {
                return callback(e.message);
            }
        }
    });
};
