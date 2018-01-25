var request = require('request');       // insert into folder contained this file in command line. Run npm install request

request('http://www.pluralsight.com/', function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
        // console.dir(response);
    }
})
