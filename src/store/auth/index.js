import axios from 'axios'
const URL = process.env.VUE_APP_BASE_URL || 'http://18.139.50.74:8080'

const state = () => {
  return {
    token: localStorage.getItem('token') || null
  }
}

const getters = {
  isLogin (state) {
    // eslint-disable-next-line quotes
    if (state.token !== null && state.token !== "undefined") {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/login`, payload)
        .then((response) => {
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('refreshtoken', response.data.data.refreshToken)
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  register (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${URL}/register`, payload)
        .then((response) => {
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  logout (context) {
    return new Promise((resolve) => {
      localStorage.removeItem('token')
      resolve('Logout Success')
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
