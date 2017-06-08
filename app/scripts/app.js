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
            this.$router.push( {name: 'room', params: { id: jQuery("#roomName").val() } } )
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

const router = new VueRouter({
    routes:[
        { path: '/', component: startRoom, props: { title: "Gladiator Academy" } } ,
        { name: 'room', path: '/room/:id', component: matchRoom }
    ]
});

var app = new Vue({
    router,
    el: '#app',
    data: {
    }
});