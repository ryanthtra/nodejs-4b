var express = require('express');
var app = express();
var articles = require('./controllers/articles');

// CRUD -  Create Read Update Delete

/**
 *    a post is going to look like this:
 *    {
 *      title: "",
 *      body: "",
 *      author: "",
 *      comments: []
 *    }
 * 
 *    a comment would look like
 *    {
 *      name: "foo",,
 *      text: "sadlkfjhasdlkfjhas"
 *    }
 */

app.use(express.bodyParser());

var notImplemented = function(req, res)
{
  res.send(501);
};

// Articles
app.get('/articles', articles.index); // Show all blog articles
app.get('/articles/new', articles.new);
app.get('/articles/:articleId', notImplemented) // Reading a single article.
app.post('/articles', articles.create); // Making a new one
app.put('/article/:articleId', notImplemented); // Updating one
app.del('/article/:articleId', notImplemented); // Deleting one

// Comments
app.post('articles/:articleId/comments', notImplemented);
app.del('articles/:articleId/comments/:commentId', notImplemented);

app.listen(8080);