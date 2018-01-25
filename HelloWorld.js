var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
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