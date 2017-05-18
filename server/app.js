var express = require('express');
var server = require('http');
var io = require('socket.io');
var app = express();
server = server.Server(app);
io = io(server);

module.exports = io;
var routes = require('./router.js');

app.use(express.static('./app'));
app.use('/_api', routes);

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

io.on('connection', function (socket) {
  console.log("IO on");
});

