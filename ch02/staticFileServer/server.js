var path = require('path');
var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');

var server = http.createServer();

var cache = {};

function genericSend(code, message, response) 
{
  response.writeHead(code, {'Content-Type':'text/plain'});
  response.end(message);
}

server.on('request', function(req, res) {
  //404
  //500
  //200 OK

  var urlParams = url.parse(req.url);
  var filename = path.join('.', urlParams.pathname);
  // deprecated - using fs.access instead
  // path.exists(filename, 'binary', function(exists) {

  // });

  // Check if the file is not already in the cache 
  if (!cache[filename]) {
    fs.access(filename, function(err) {
      console.log(err ? 'No acess!' : 'Can read/write');
      if (err) {
        // 404
        return genericSend(404, 'not found', res);
      }
      fs.readFile(filename, 'binary', function(error, file) {
        if (error) {
          // 500
          return genericSend(500, 'internal server error', res);
        }

        // Record to cache first 
        cache[filename] = file;

        var type = mime.lookup(filename);
        res.writeHead(200, {'Content-Type':type});
        res.write(file, 'binary');
        res.end();
      });
    });
  }
  else {
    console.log("File is in the cache!");
    var type = mime.lookup(filename);
    res.writeHead(200, {'Content-Type':type});
    res.write(cache[filename], 'binary');
    res.end();
  }
});

server.listen(9000);