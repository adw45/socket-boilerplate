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

function createRoom() {
    var roomName = jQuery("#roomName").val();
    console.log(roomName)
    window.location.href='http://localhost:3000?id=' + roomName; 
}
