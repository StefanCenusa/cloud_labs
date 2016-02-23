var quote = require("./quote")
    , slack = require("./slack")
    , weather = require("./weather")
    , async = require("async")
    , self = module.exports;


function getRandomQuote(cb) {
    quote.getQuote(function quoteRetrieved(err, quote) {
        if (err) {
            return cb(err);
        } else {
            var data = {
                quote: quote
            };
            return cb(null, data)
        }
    });
}

function getWeather(data, cb) {
    weather.getWeather(function weatherRetrieved(err, weather){
        if (err) {
            return cb(err);
        } else {
            data.weather = weather;
            return cb(null, data)
        }
    })
}

function postToSlack(data, cb) {

    var quoteAttach = {
        color: "#36a64f",
        author_name: data.quote.author,
        text: data.quote.quote
    };

    var weatherAttach = {
        color: "#00bfff",
        author_name: "Weather",
        text: data.weather
    };

    var attachements = [];
    attachements.push(quoteAttach);
    attachements.push(weatherAttach);
    slack.sendToSlack(attachements, cb);
}


self.run = function run(cb){
    async.waterfall([
        getRandomQuote,
        getWeather,
        postToSlack
    ], cb);
};
