function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var id = getParameterByName("id");
var socket = io.connect('http://localhost:3000/');
var username = Math.random(); 
socket.emit('joinRoom', {
    roomname: id,
    username: username
});

// socket listeners
socket.on('update', function (data) {
    console.log(data);
    jQuery("#number").text(data.number);
});

function increase() {
    socket.emit('increase');
}
function decrease() {
    socket.emit('decrease');
}

