var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();
//http://localhost:3001/tickers/_getticker/MSFT
router.get('/_getticker/:id', function(req, res) {

       if (!req.params.id) {
           res.status(500);
           res.send({"Error": "Try again"});
           console.log("Error.");
       }
      request.get({ url: "https://qjml60b3v4.execute-api.us-east-1.amazonaws.com/prod/stock?symbol=" + req.params.id },      function(error, response, body) {
              if (!error && response.statusCode == 200) {
                  res.json(JSON.parse(body));
                 }
             });
     });

module.exports = router;
