import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/icon/iconfont.css'
import axios from './js/common/axios'
import { Message } from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('userInfo') ||
    JSON.stringify((store.getters.userInfo)) === '{}') {
    if (to.name === 'login') {
      next()
    } else {
      Message.error('登录过期')
      router.replace('/')
    }
  } else {
    let module = to.path.split('/')[1] ? to.path.split('/')[1] : 'index'
    store.commit('SET_ACTIVE_NAV', module)
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
