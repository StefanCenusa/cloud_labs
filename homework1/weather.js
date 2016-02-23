var request = require("request")
    , self = module.exports;

var options = {
    method: 'GET',
    url: 'https://simple-weather.p.mashape.com/weather',
    qs: {lat: '47.1569', lng: '27.5903'},
    headers: {
        'x-mashape-key': '89jp4dDftXmshnPsvAdBX5pZjXlap1GT4VAjsnxa0Su1j4zyrH'
    }
};

self.getWeather = function getWeather(callback) {
    request(options, function (error, response) {
        if (error) {
            callback(error);
        } else {
            var weather = response.body;
            return callback(null, weather);
        }
    });
};