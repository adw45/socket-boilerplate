// Socket connection 
var socket;

// Socket event listeners
function createSocketListeners() {
    socket.on('numUpdate', function (returnedNum) {
        jQuery("#number").text(returnedNum);
    });
}

// Private variables
var id;

// Private functions
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function increase() {
    jQuery.ajax({
        url: "/_api/player/increase/" + id,
        method: "POST"
    });
}
function decrease() {
    jQuery.ajax({
        url: "/_api/player/decrease/" + id,
        method: "POST"
    });
}

// Init

if (getParameterByName("id")) {
    id = getParameterByName("id");
    jQuery.ajax("/_api/player/getNum/" + id).then(function (returnedNum) {
        jQuery("#number").text(returnedNum.num);
    });
    socket = io.connect('http://localhost:3000/' + id);
    createSocketListeners();
} else {
    jQuery.ajax("/_api/player/newSession").then(function (data) {
        id = data.sessionId;
        jQuery("#number").text(data.num);
        socket = io.connect('http://localhost:3000/' + id);
        createSocketListeners();
    });
}



