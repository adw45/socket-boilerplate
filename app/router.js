import startRoom from './components/start-room.js';
import matchRoom from './components/match-room.js';
import playerSelect from './components/player-select.js';
import mapSelect from './components/map-select';
import scoreboard from './components/scoreboard';
import team from './components/team';

const router = new VueRouter({
    routes:[
        { path: '/', component: startRoom, props: { title: "Gladiator Academy" } } ,
        { name: 'room', path: '/room/:id', component: matchRoom }
    ]
});

module.exports = router;
