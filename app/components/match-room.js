const matchRoom = Vue.component('match-room', {
    template: `
        <div>
            <h1>Room: {{ roomName }}</h1>
            <team></team>
            <map-select></map-select>
            <scoreboard></scoreboard>
            <team></team>
        </div>
    `,
    // <span id="number">{{ count }}</span>
    //         </br>
    //         </br>
    //         <button @click="increase()">Plus!</button>
    //         <button @click="decrease()">Minus!</button>
    methods: {
        increase: function() {
            this.$socket.emit('increase')
        },
        decrease: function() {
            this.$socket.emit('decrease')
        },
        joinRoom: function() {
            this.$socket.emit('joinRoom', {
                roomname: this.$route.params.id,
                username: 'user-name'
            })
        }
    },
    computed: {
        count() {
            return this.$store.state.count;
        },
        roomName: function() {
            return this.$route.params.id
        } 
    },
    mounted() {
        this.joinRoom();
    },
    watch: {
        '$route' (to, from) {
            this.joinRoom();
        }
    }
});

module.exports = matchRoom;
