var express = require('express');
var app = express();
var quotes = require('./controllers/quotes');

app.use(express.bodyParser());

var notImplemented = function(req, res)
{
  res.send(501);
};

app.get('/randomquote', quotes.quotemachine);

app.all('*', function(req, res) {
  res.send(404);
});

app.listen(8080);