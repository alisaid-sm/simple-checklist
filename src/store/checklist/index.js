import axios from 'axios'
const IP = process.env.VUE_APP_BASE_URL || 'http://18.139.50.74:8080'

const state = () => {
  return {
    all: {
      data: [],
      isLoading: false
    }
  }
}

const getters = {
  getAllChecklist (state) {
    return state.all
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.all.data = payload
  },
  SET_ALL_LOADING (state, payload) {
    state.all.isLoading = payload
  },
  SET_SEARCH (state, payload) {
    state.all.data = payload
  },
  SET_SORT (state, payload) {
    state.all.data = payload
  }
}

const actions = {
  getAllChecklist (context, payload) {
    context.commit('SET_ALL_LOADING', true)
    return new Promise((resolve, reject) => {
      axios.get(`${IP}/checklist`)
        .then((response) => {
          context.commit('SET_ALL_DATA', response.data)
          console.log(response)
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        }).finally(() => {
          context.commit('SET_ALL_LOADING', false)
        })
    })
  },
  addChecklist (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${IP}/api/v1/product/insert`, payload)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  delChecklist (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${IP}/api/v1/product/delete/${payload}`)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  renameItem (context, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`${IP}/item/rename/${payload.id}`, payload.data)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  getItemById (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${IP}/item/${payload.id}`, payload.data)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  addItem (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${IP}/item/${payload.id}`, payload.data)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  updateStatusItem (context, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`${IP}/item/${payload.id}`, payload.data)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  },
  deleteItem (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${IP}/item/${payload.id}`, payload.data)
        .then((response) => {
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
