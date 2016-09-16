var express = require('express');
var app = express();

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

var posts = [
  {name: 'foo bar'},
  {name: 'baz'}
];

app.get('/posts', function(req, res) {
  res.render('./views/posts', {posts:posts});
});

app.listen(8080);