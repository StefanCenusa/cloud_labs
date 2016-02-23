var express = require('express')
    , personalAssistant = require("./personalAssistant");
var app = express();

app.get('/', function (req, res) {
    personalAssistant.run(function onDone(err){
        if (err) {
            res.status(500).json({
                error: err
            });
        } else {
            res.status(200).json({
                status: "ok"
            });
        }
    });
});

app.listen(5000, function () {
    console.log('App listening on port 5000!');
});