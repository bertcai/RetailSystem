import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeNav: 'index',
    userInfo: localStorage.getItem('userInfo') || {}
  },
  getters: {
    activeNav: state => state.activeNav,
    userInfo: state => state.userInfo
  },
  mutations: {
    SET_ACTIVE_NAV (state, module) {
      state.activeNav = module
    },
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', userInfo)
    },
    CLEAR_USER_INFO (state) {
      state.userInfo = {}
      localStorage.removeItem('userInfo')
    }
  },
  actions: {}
})
