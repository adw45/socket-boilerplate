
function createRoom() {
    var roomName = jQuery("#roomName").val();
    console.log(roomName)
    window.location.href='http://localhost:3000/pages/room.html?id=' + roomName; 
}
