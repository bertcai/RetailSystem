import axios from 'axios'
import CONFIG from './config'
import qs from 'qs'
import { Message } from 'element-ui'
import store from '../../store'
import router from '../../router'

axios.defaults.baseURL = CONFIG.api
axios.defaults.timeout = 5000
axios.interceptors.request.use((config) => {
  config.withCredentials = true
  if (config.type === 'form' && config.type !== 'image') {
    config.data = qs.stringify(config.data)
  } else {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
  }
  return config
}, error => {
  Message.error('请求超时')
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  if (res.data.errno === '200') {
    return res.data.data
  } else if (res.data.errno === '416') {
    Message.error('用户登录过期')
    setTimeout(() => {
      store.commit('CLEAR_USER_INFO')
      router.push('/')
    }, 500)
  } else if (res.data.errno === '0000') {
    Message.error(res.data.msg)
    return Promise.reject(res.data)
  } else {
    return Promise.reject(res.data)
  }
}, error => {
  return Promise.reject(error)
})

export default axios
