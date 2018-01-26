var http = require('http');

var options = {
    host: 'www.google.co.il',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log("Going to make request...");

// var req = http.request('http://www.google.co.il/', function(response) {
//     console.log(response.statusCode);
//     response.pipe(process.stdout);
// });

var req = http.request(options, function(response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();

// same result
http.get(options, function(response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});