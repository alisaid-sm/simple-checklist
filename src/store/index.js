import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import checklist from './checklist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    checklist
  }
})
