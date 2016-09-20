var express = require('express');
var app = express();

// '/this/is/a/route' => [action 1](...[action n])

app.use(express.logger());

app.get("/hello/:person", function(req, res) {
  res.send(`hello ${req.param('person')}`);
});

app.get("/goodbye", function(req, res) {
  res.send("goodbye world");
});

app.all("*", function(req, res) {
  res.send(404);
});

app.listen(8080, function() {
  console.log("server is running on 8080");
});