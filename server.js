var express = require('express'),
    app = express();

var port = process.env.port || 8080;

var io = require('socket.io').listen(app.listen(port));

require('./config')(app, io);
require('./routes')(app, io);

console.log('Your appliation is running on http://localhost:' + port);
