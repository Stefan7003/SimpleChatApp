var express = require('express'),
    app = express();

var port = process.env.port || 8080;

//var io = require('socket.io').listen(app)
app.listen(port);

require('./routes')(app);

console.log('Your appliation is running on http://localhost:' + port);
