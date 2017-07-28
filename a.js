var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var mongodb = require("mongodb");
var MongoClient = require("mongodb").MongoClient;
require("events").EventEmitter.prototype._maxListeners = 100;

var mongodbServer = new mongodb.Server("localhost", 27017, { auto_reconnect: true, poolSize: 10 });
var db = new mongodb.Db("dataB", mongodbServer);
var usersssssss="";
var isTriedLogin = false, isLoginSuccessful = false; var canRegis = true;

var server = http.createServer(function(request, response) {
    if (request.method == "POST") {
			
		// Switch msg into a JSON object
        var formData = "", msg = "", obj = "";
        return request.on("data", function(data) {
			formData += data;
			return request.on("end", function() {
				var user;
				user = qs.parse(formData);
				msg = JSON.stringify(user);
				console.log("305cde="+msg);
				
				response.writeHead(200, {
				  "Content-Type": "application/json",
				  "Content-Length": msg.length
				});
				
				obj = JSON.parse(msg);
				console.log(obj['act']);
				
				// Prevent signup page runs this part
				if (request.url == "/login2.html") {
					console.log(request.url);
			   if(obj['act']=="signup"){
				//if (obj.signup != null) {

					console.log("signup!=null");
					// Send obj data to dataB
					db.open(function() {
						
						db.collection("user", function(err, collection) {
							
							collection.insert({

								username: obj.ac,
								password: obj.pw
							}, function(err, data) {
								
								if (data) {
									console.log("Successfully Insert ");
									  //response.end('{"success" : "Updated Successfully", "status" : 200}');
									console.log("here");
								} else {
									console.log("Failed to Insert");
									//response.end('{"success" : "Updated Successfully", "status" : 200}');
								}
							});
						});
					});

				}
					
			if(obj.signup == "logout"){
				isLoginSuccessful= false;

			}		
					
			
					
					
					
				}
	
			});
        });
    } else {
			
		// Get
			
		fs.readFile("./" + request.url, function (err, data) {
			var dotoffset = request.url.lastIndexOf(".");
			var mimetype = dotoffset == -1
				? "text/plain"
				: {
					".html": "text/html",
					".ico" : "photo/x-icon",
					".jpg" : "photo/jpeg",
					".png" : "photo/png",
					".gif" : "photo/gif",
					".css" : "text/css",
					".js"  : "text/javascript"
				}[request.url.substr(dotoffset)];
			if (!err) {
				response.setHeader("Content-Type", mimetype);
				response.end(data);
				console.log(request.url, mimetype);
			} else {
				response.writeHead(302, {"Location": "index.html"});
				
				
				
				response.end('{"success" : "Updated Successfully", "status" : 200}');
			}
			
			
			
			
		});
    }
	
	
});

server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");


