const mapSelect = Vue.component('map-select', {
    template: `
        <div>
            <input type='radio' name='map'>Nagrand Arena</input>
            <input type='radio' name='map'>Blade Edge Arena</input>
            <input type='radio' name='map'>Dalaran Sewers</input>
            <input type='radio' name='map'>Tigers Peak</input>
            <input type='radio' name='map'>Tol'varan</input>
            <input type='radio' name='map'>Ruins of Lordaeron</input>
            <input type='radio' name='map'>Ashmane's Fall</input>
            <input type='radio' name='map'>Black Rook Hold</input>
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

module.exports = mapSelect;
