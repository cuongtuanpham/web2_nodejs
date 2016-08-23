var http = require("http");
var express = require("express");

var app = express()
          .use(express.static(__dirname + "/client"))
          .use("/api/hello", function(req, res){
            res.end("hello");
          })
          .use("/api/about", function(req, res){
            res.end("about");
          })
          .use("/*", function(req, res){
            res.end("other");
          });

http.createServer(app).listen(8888);
