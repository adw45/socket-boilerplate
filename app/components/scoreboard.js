const scoreboard = Vue.component('scoreboard', {
    template: `
        <div>
            <span>Team1</span>
            <span>Timer</span>
            <span>Team2</span>
        </div>
    `,
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
    }
});

module.exports = scoreboard;
