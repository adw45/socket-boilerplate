const team = Vue.component('team', {
    template: `
        <div>
            <player-select></player-select>
            <player-select></player-select>
            <player-select></player-select>
            <player-select></player-select>
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

module.exports = team;
