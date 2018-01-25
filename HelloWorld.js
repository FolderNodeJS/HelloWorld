var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Requested url: '" + req.url + "'\n");
    res.end('Hello World! This is node js');
}).listen(8080);
console.log("Server is now running");


// Another way.
// Can be start multiple servers
// function onRequest(request, response) {
//     console.log(request.url);
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World!!! This is node js");
//     response.end();
// }
// http.createServer(onRequest).listen(8888);
// console.log("Server is now running");


// Split the Query String
// http://localhost:8080/?year=2017&month=July
//
// var http = require('http');
// var url = require('url');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8080);
//
// 2017 July


// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);
//
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'
//
// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'