import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
const IP = process.env.VUE_APP_BASE_URL || 'http://18.139.50.74:8080'

axios.defaults.headers.common = { Authorization: `bearer ${localStorage.getItem('token')}` }

axios.interceptors.response.use((response) => {
  return response
}, async (err) => {
  const status = err.response.status
  if (status === 500) {
    alert('refreshtoken')
    const refreshtoken = localStorage.getItem('refreshtoken')
    const fd = {
      refreshToken: refreshtoken
    }
    await axios.post(`${IP}/refresh-token`, fd)
      .then((response) => {
        localStorage.setItem('token', response.data.data.token)
        window.location = '/'
      })
  } else {
    window.location = '/login'
  }
})

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
