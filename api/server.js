var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello\n');
}).listen(3000);

server.on('success', function(){
	console.log('Server listening on port 8080')
});
server.on('error', function(e){
	console.log(e);
});
