import startRoom from './components/start-room.js';
import matchRoom from './components/match-room.js';

const router = new VueRouter({
    routes:[
        { path: '/', component: startRoom, props: { title: "Gladiator Academy" } } ,
        { name: 'room', path: '/room/:id', component: matchRoom }
    ]
});

module.exports = router;
