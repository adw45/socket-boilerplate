const startRoom = Vue.component('start-room', {
    props: ['title'],
    template: `
        <div>
            <h1>{{ title }}</h1>    
            <input type="text" id="roomName" placeholder="Room name" />
            <button @click="joinRoom()">Join Room</button>
        </div>
    `,
    methods: {
        joinRoom: function() {
            this.$router.push( {name: 'room', params: { id: jQuery("#roomName").val() } } )
        }
    }
});

module.exports = startRoom;
