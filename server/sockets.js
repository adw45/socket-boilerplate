var io = require('socket.io');
var server = require('./app').server;
io = io(server);

io.on('connection', function (socket) {
  console.log("IO on");
});

module.exports = io;