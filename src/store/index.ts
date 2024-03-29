import { createStore } from 'vuex'

const ph = 'http://89.111.153.226:3000'
// const ph = 'http://localhost:3000'

function getCookieToken() {
  const name = 'token='
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim()
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length)
    }
  }

  return ''
}

function getCookie() {
  const name = 'account='
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim()
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length)
    }
  }

  return ''
}

interface State {
  data: Object
  cartData: Object
  getterData: Object
  counter: number
  choosen: Object
  info: boolean
  type: {
    style: string
    plot: string
    size: string
    acres: string
    num: string
  }
  isEmptyType: boolean
  arcesChsn: boolean
  adpMenu: boolean
  choosenDisplay: string[]
  choosenState: boolean
  logged: boolean
  cookie: string
  token: string
  choosenAdmin: Object
  infoAdmin: boolean
  topEight: Object[]
  paginationProj: Object[]
  path: string
  project_state: number
}

export default createStore({
  state: {
    data: {},
    cartData: {},
    getterData: {},
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
    choosenState: false,
    logged: false,
    cookie: getCookie(),
    token: getCookieToken(),
    choosenAdmin: {},
    infoAdmin: false,
    topEight: [],
    paginationProj: [],
    path: ph,
    project_state: 0
    // cookies: Cookies.get('account') || null
  },
  mutations: {
    showInfoAdmin(state: State, obj: Object) {
      state.infoAdmin = true
      state.choosenAdmin = obj
      console.log(state.choosenAdmin)
    },
    closeInfoAdmin(state: State) {
      state.infoAdmin = false
    },
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
    closeInfoBack(state: State) {
      state.info = true
    },
    setStyle(state: State, data: string) {
      state.type.style = data
    },
    setPlot(state: State, data: string) {
      state.type.plot = data
    },
    setNum(state: State, data: string) {
      state.type.num = data
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
      state.type.num = ''
      state.type.plot = ''
      state.choosenState = !state.choosenState
    },
    setUnLogged(state: State) {
      state.logged = false
    },
    setData(state: State, data: Object) {
      state.data = data
    },
    setCart(state: State, data: Object) {
      state.cartData = data
    },
    addPagination(state: State, projects: Object[]) {
      state.paginationProj = projects
    },
    setProjState(state: State, index: number) {
      state.project_state = index
      console.log(state.project_state)
    }
  },
  actions: {
    async fetchData({ commit }, index: number) {
      try {
        const response = await fetch(`${ph}/api/products`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: getCookieToken()
          })
        })

        if (response.ok) {
          //return state.data.sort((a, b) => b.likes - a.likes).slice(0, 8)
          if (index === 1) {
            let responseData = await response.json()
            responseData = responseData.reverse()
            commit('setData', responseData)
          } else if (index === 2) {
            let responseData = await response.json()
            responseData = responseData.sort((a, b) => b.rank - a.rank)
            commit('setData', responseData)
          } else {
            const responseData = await response.json()
            commit('setData', responseData)
          }
        } else {
          console.error('Ошибка при загрузке данных')
        }
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }

      try {
        const response = await fetch(`${ph}/api/cart`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: getCookieToken()
          })
        })

        if (response.ok) {
          const responseData = await response.json()
          commit('setCart', responseData)
        } else {
          console.error('Ошибка при загрузке данных')
        }
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    }
  },
  getters: {
    filteredData(state: State) {
      const { style, plot, size, acres, num } = state.type

      // Фильтруем массив data по всем четырем параметрам
      return state.data.filter((item) => {
        const isStyleMatch = !style || item.style === style
        const isPlotMatch = !plot || item.plot === plot
        const isNumber = !num || item.pk == num

        const [xValue, yValue] = item.size.split('x').map(parseFloat)

        // Парсим значение из строки size и проверяем, находятся ли xValue и yValue в заданных пределах
        const [targetX, targetY] = size.split('x').map(parseFloat)
        const isAreaMatch =
          !size || (Math.abs(xValue - targetX) <= 1 && Math.abs(yValue - targetY) <= 1)

        console.log(state.type)
        // Проверяем приблизительное значение acres
        const isAcresMatch = !acres || Math.abs(+item.acres - acres) <= 1

        return isNumber && isStyleMatch && isPlotMatch && isAreaMatch && isAcresMatch
      })
    },
    getIsLogged(state: State) {
      state.logged = !state.logged

      return state.logged
    },
    getTopEight(state: State) {
      return state.data.sort((a, b) => b.rank - a.rank).slice(0, 8)
    }
  },

  modules: {}
})
