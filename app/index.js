import VueSocketio from './js/vendor/vue-socket.min.js';

// https://www.youtube.com/watch?v=2CSr2vBApSI&index=1&list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        update: (state, data) => {
            state.count = data.number
        }
    }
});

Vue.use(VueSocketio, window.location.host, store);

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

const matchRoom = Vue.component('match-room', {
    template: `
        <div>
            <h1>Room: {{ roomName }}</h1>
            <span id="number">{{ count }}</span>
            </br>
            </br>
            <button @click="increase()">Plus!</button>
            <button @click="decrease()">Minus!</button>
        </div>
    `,
    methods: {
        increase: function() {
            this.$socket.emit('increase')
        },
        decrease: function() {
            this.$socket.emit('decrease')
        },
        joinRoom: function(data) {
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
        roomName() {
            return this.$route.params.id
        } 
    },
    mounted() {
        this.joinRoom();
    }
});


const router = new VueRouter({
    routes:[
        { path: '/', component: startRoom, props: { title: "Gladiator Academy" } } ,
        { name: 'room', path: '/room/:id', component: matchRoom }
    ]
});

var app = new Vue({
    router, 
    store,
    el: '#app',
    data: {
    },
    sockets: {
        update: function(data) {
            store.commit('update', data)
        }
    }
});
