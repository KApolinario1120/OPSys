// I will become a front-end when I grow up
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Connection Successful');
}).listen(8080);

//const x = fetch(http.STATUS_CODES);
console.log(x);