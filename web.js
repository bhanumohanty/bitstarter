var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var htmlDataBuf = fs.readFileSync('index.html');
var htmlData = htmlDataBuf.toString(); 

app.get('/', function(request, response) {
  response.send(htmlData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
