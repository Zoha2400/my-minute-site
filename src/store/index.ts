import { createStore } from 'vuex'


function getCookie() {
    const name = "account=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for(let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return '';
}




interface State {
  data: Object
  getterData: Object
  counter: number
  choosen: Object
  info: boolean
  type: {
    style: string
    plot: string
    size: string
    acres: string
    num: number
  }
  isEmptyType: boolean
  arcesChsn: boolean
  adpMenu: boolean
  choosenDisplay: string[]
  posts: {
    reg: string
    log: string
  }
  logged: boolean,
  cookie: string
}

let data

try {
  const response = await fetch('http://45.153.186.140:3009/api/projects/')
  if (response.ok) {
    const responseData = await response.json()
    data = responseData
  } else {
    console.error('Ошибка при загрузке данных')
  }
} catch (error) {
  console.error('Произошла ошибка:', error)
}
export default createStore({
  state: {
    data: data,
    getterData: data,
    choosen: {},
    info: true,
    type: {
      style: '',
      plot: '',
      size: '',
      acres: '',
      num: ''
    },
    isEmptyType: false,
    arcesChsn: false,
    adpMenu: true,
    choosenDisplay: [],
    posts: {
      reg: 'https://1111-188-113-196-253.ngrok-free.app/api/registration/',
      log: 'https://1111-188-113-196-253.ngrok-free.app/api/login/'
    },
    logged: false,
    cookie: getCookie(),
    // cookies: Cookies.get('account') || null
  },
  mutations: {
    showInfo(state: State, obj: Object) {
      state.info = !state.info
      state.choosen = obj
      if (!state.adpMenu) {
        state.adpMenu = !state.adpMenu
      }
    },
    closeInfo(state: State) {
      state.info = !state.info
    },
    setStyle(state: State, data: string) {
      state.type.style = data
    },
    setPlot(state: State, data: string) {
      state.type.plot = data
    },
    setArea(state: State, data: string) {
      if (+data.split('x')[0] != 0 && +data.split('x')[1] != 0) {
        state.type.size = data
      }
    },
    setAcres(state: State, data: string, checker: boolean) {
      state.type.acres = data
      if (checker) {
        state.arcesChsn = !state.arcesChsn
      }
    },
    backArea(state: State) {
      state.type.size = ''
    },
    backArces(state: State) {
      state.type.acres = ''
      if (state.arcesChsn) state.arcesChsn = !state.arcesChsn
    },
    showAdpMenu(state: State) {
      state.adpMenu = !state.adpMenu
      if (!state.info) {
        state.info = !state.info
      }
    },
    addChoosenDisplay(state: State, element: string) {
      state.choosenDisplay.map((el) => {
        if (el === element) {
          return 0
        }
      })
      state.choosenDisplay.push(element)
    },

    clearAll(state: State) {
      state.type.style = ''
      state.type.acres = ''
      state.type.size = ''
      state.type.num = 0
      state.type.plot = ''
    },
    setUnLogged(state: State) {
      state.logged = false
    }
  },
  actions: {},
  getters: {
    filteredData(state: State) {
      const { style, plot, size, acres, num } = state.type
      // Фильтруем массив data по всем четырем параметрам
      return state.data.filter((item) => {
        const isStyleMatch = !style || item.style === style
        const isPlotMatch = !plot || item.plot === plot
        const isNumber = !num || +item.pk === +num

        const [xValue, yValue] = item.size.split('x').map(parseFloat)

        // Парсим значение из строки area и проверяем, находятся ли xValue и yValue в заданных пределах
        const [targetX, targetY] = size.split('x').map(parseFloat)
        const isAreaMatch =
          !size || (Math.abs(+xValue - +targetX) <= 1 && Math.abs(+yValue - +targetY) <= 1)

        // Проверяем приблизительное значение acres
        const isAcresMatch = !acres || Math.abs(+item.acres - acres) <= 1

        return isStyleMatch && isPlotMatch && isAreaMatch && isAcresMatch && isNumber
      })
    },

    getIsLogged(state: State) {
      state.logged = !state.logged

      return state.logged
    }
  },

  modules: {}
})
