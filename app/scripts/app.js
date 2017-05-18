
function createRoom() {
    var roomName = jQuery("#roomName").val();
    console.log(roomName)
    window.location.href= '/pages/room.html?id=' + roomName; 
}
