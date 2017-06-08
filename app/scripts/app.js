jQuery.getScript('scripts/vendor/vue-socket.min.js', (d, t, j) => {
    Vue.use(VueSocketio, window.location.host);
});

const startRoom = Vue.component('start-room', {
    props: ['title'],
    template: `
        <div>
            <h1>{{ title }}</h1>    
            <input type="text" id="roomName" placeholder="Room name" />
            <button @click="createRoom()">Join Room</button>
        </div>
    `,
    methods: {
        createRoom: function() {
            this.$socket.emit('joinRoom', {
                roomname: roomName,
                username: 1234
            })
            //this.$router.push( {name: 'room', params: { id: jQuery("#roomName").val() } } )
        }
    }
});

const matchRoom = Vue.component('match-room', {
    props: [],
    template: `
        <div>
            <h1>Room: </h1>
            <span id="number"></span>
            </br>
            </br>
            <button onclick="increase()">Plus!</button>
            </br>
            </br>
            <button onclick="decrease()">Minus!</button>
        </div>
    `
});

// const store = new Vuex.Store({
//     state: {
//         count: 5
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         },
//         decrement(state) {
//             state.count--
//         } 
//     }
// });

const router = new VueRouter({
    routes:[
        { path: '/', component: startRoom, props: { title: "Gladiator Academy" } } ,
        { name: 'room', path: '/room/:id', component: matchRoom }
    ]
});

var app = new Vue({
    router, //store,
    el: '#app',
    data: {
    },
    methods: {
        test: function() {
            console.log(this);
            this.$socket.emit('hello')
        }
    },
    sockets: {
        update: function(data) {
            console.log(data);
        },
        hello: function(data) {
            console.log(data);
        }
    }
});
