var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('request received');
 //   res.writeHead(200, {'Content-Type': 'text/plain'});
  //  res.end("hi");
   fs.readFile('sample3.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
     console.log(obj["name"]);
     console.log(obj.name);
     console.log(obj.address.streetAddress);
     

/*	alert(json.address.streetAddress); //88 8nd Street
	alert(json["address"].city); //New York

	alert(json.phoneNumber[0].number); //111 111-1111
	alert(json.phoneNumber[1].type); //fax

	alert(json.phoneNumber.number); //undefined*/
     
     for (var prop in obj) {
        console.log("Key:" + prop);
        console.log("Value:" + obj[prop]);
			 
    }
     
     
      });
}).listen(9000);