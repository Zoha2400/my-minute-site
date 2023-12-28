import { createApp } from 'vue'
import store from '@/store/index'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(store)
app.use(router)

app.config.globalProperties.$store.dispatch('fetchData').then(() => {
  app.mount('#app')
})
