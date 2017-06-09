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

var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Example app listening on port', port)
});

var numbers = {};

io.on('connection', function (socket) {

  socket.on('disconnect', function() {
    socket.leave(socket.room);
    if (!io.sockets.adapter.rooms[socket.room]) {
      delete numbers[socket.room];
    }
  })

  socket.on('joinRoom', function(data){
    socket.join(data.roomname);
    
    socket.room = data.roomname;
    socket.username = data.username; 
   
    if (!numbers[socket.room]) {
        numbers[socket.room]= 5;
    }

    update(socket.room, {
      number: numbers[socket.room]
    })

  });

  socket.on('increase', function() {
    update(socket.room, {
      number: ++numbers[socket.room]
    });
  });

  socket.on('decrease', function() {
    update(socket.room, {
      number: --numbers[socket.room]
    });
  });

  var update = function(room, data) {
    io.in(room).emit('update', data);
  }; 

});