import { createStore } from "vuex";

interface State {
    counter: number;
}

export default createStore({
    state: {
        counter: 0,
    },
    mutations: {
        increment(state: State) {
            state.counter++
        },
    }
})