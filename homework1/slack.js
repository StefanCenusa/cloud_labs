var request = require("request"),
    self = module.exports;

var options = {
    method: 'POST',
    url: 'https://hooks.slack.com/services/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',
    headers: {
        'content-type': 'application/json'
    },
    body: {
        "username": "Personal assistant",
        "icon_url": "https://slack.com/img/icons/app-57.png"
    },
    json: true
};


self.sendToSlack = function sendToSlack(data, callback) {
    options.body.attachments = data;
    request(options, function (error, response) {
        if (error) {
            return callback(error);
        } else {
            if (response.body === "ok"){
                return  callback();
            } else {
                return callback(response);
            }
        }
    });
};