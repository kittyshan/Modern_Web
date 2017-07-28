var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('request received');
 //   res.writeHead(200, {'Content-Type': 'text/plain'});
  //  res.end("hi");
   fs.readFile('sample.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
    console.log(obj['data'][0]);
      });
}).listen(9000);