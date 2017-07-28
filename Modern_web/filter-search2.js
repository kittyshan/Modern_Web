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



(function(){
  var $imgs=$('#gallery img');
  var $search=$('#filter-search');
  var cache=[];
  
  $imgs.each(function(){
    cache.push({
      element:this,
      text:this.alt.trim().toLowerCase()
    });
  });
  
  
  function filter(){
    var query=this.value.trim().toLowerCase();
    
    cache.forEach(function(img){
      var index=0;
      if(query){
        index=img.text.indexOf(query);
      }
img.element.style.display=index===-1?'none':'';
    });
  }
  if('oninput' in $search[0]){
    $search.on('input', filter);
    
  }else{
    $search.on('keyup', filter);
  }
}()
);



server.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");