import { createStore } from "vuex";

interface State {
    counter: number,
    choosen: Object,
    info: boolean
}

let data;

try {
    const response = await fetch('http://45.153.186.140:3009/api/projects/');
    if (response.ok) {
      const responseData = await response.json();
      data = responseData;
    } else {
      console.error('Ошибка при загрузке данных');
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
export default createStore({
    state: {
        data: data,
        choosen:{},
        info: true,
    },
    mutations: {
        showInfo(state: State, obj: Object){
            state.info = !state.info;
            state.choosen = obj; 
        }
    },
    actions: {
    },
    modules: {},

})