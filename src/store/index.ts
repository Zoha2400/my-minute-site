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
    },
    arcesChsn: boolean,
    adpMenu: boolean
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
        getterData: data,
        choosen:{},
        info: true,
        type: {
            style: '',
            plot: '',
            size: '',
            acres: '',
        },
        arcesChsn: false,
        adpMenu: true
    },
    mutations: {
        showInfo(state: State, obj: Object){
            state.info = !state.info;
            state.choosen = obj; 
            if(!state.adpMenu){
              state.adpMenu = !state.adpMenu;
            }
        },
        closeInfo(state: State){
            state.info = !state.info;
        },
        setStyle(state: State, data: string){
            state.type.style = data;
        },
        setPlot(state: State, data: string){
            state.type.plot = data;
        },
        setArea(state: State, data: string){
          if(+data.split('x')[0] != 0 && +data.split('x')[1] != 0){
            state.type.size = data;
          }
        },
        setAcres(state: State, data: string, checker: boolean){
            state.type.acres = data;
            if(checker) {state.arcesChsn = !state.arcesChsn};
        },
        backArea(state: State){
            state.type.size = '';
        },
        backArces(state: State){
            state.type.acres = '';
            if(state.arcesChsn) state.arcesChsn = !state.arcesChsn;
        },
        showAdpMenu(state: State){
          state.adpMenu = !state.adpMenu;
          if(!state.info){
            state.info = !state.info;
          }

        }
    },
    actions: {
    },
    getters: {
      filteredData(state: State) {
        const { style, plot, size, acres } = state.type;
    
        // Фильтруем массив data по всем четырем параметрам
        return state.data.filter((item) => {
          const isStyleMatch = !style || item.style === style;
          const isPlotMatch = !plot || item.plot === plot;
    

          const [xValue, yValue] = item.size.split('x').map(parseFloat);

          // Парсим значение из строки area и проверяем, находятся ли xValue и yValue в заданных пределах
          const [targetX, targetY] = size.split('x').map(parseFloat);
          const isAreaMatch = !size || ((Math.abs(+xValue - +targetX) <= 2 ) && (Math.abs(+yValue - +targetY) <= 2 ));

          // Проверяем приблизительное значение acres
          const isAcresMatch = !acres || Math.abs(+item.acres - acres) <= 2;
    
          return isStyleMatch && isPlotMatch && isAreaMatch && isAcresMatch;
        });
      },
    },
    
    modules: {},

})