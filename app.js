var express	= require('express');
var jade    = require('jade');
var app 	= express();
var port 	= process.env.PORT || 3000;
var io      = require('socket.io').listen(app.listen(port));

app.set('views','./views');
app.set('view engine', 'jade');

require('./config')(app, io);
require('./routes')(app, io);

console.log('chat system is running on http://localhost:' + port);