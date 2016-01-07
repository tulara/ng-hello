var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/web/public')).listen(8080);