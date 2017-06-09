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

module.exports = store;
