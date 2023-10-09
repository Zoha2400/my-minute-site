import { createStore } from "vuex";

interface State {
    counter: number,
    choosen: Object,
    info: boolean,
    type: {
        style: string,
        plot: string,
        area: string,
        acres: string,
    }
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
        type: {
            style: '',
            plot: '',
            area: '',
            acres: '',
        }
    },
    mutations: {
        showInfo(state: State, obj: Object){
            state.info = !state.info;
            state.choosen = obj; 
        },
        setStyle(state: State, data: string){
            state.type.style = data;
        },
        setPlot(state: State, data: string){
            state.type.plot = data;
        },
        setArea(state: State, data: string){
            state.type.area = data;
        },
        setAcres(state: State, data: string){
            state.type.acres = data;
        },
    },
    actions: {
    },
    getters: {
        filteredData(state: State) {
            const { style, plot, area, acres } = state.type;

            // Фильтруем массив data по всем четырем параметрам
            return state.data.filter((item) => {
              return (
                (!style || item.style === style) &&
                (!plot || item.plot === plot) &&
                (!area || item.area === area) &&
                (!acres || item.acres === acres)
              );
            });
          },
    },
    modules: {},

})