import axios from 'axios'
import store from '@/store'
import storage from 'store'
import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'
import { ACCESS_TOKEN, USER_ID } from '@/store/mutation-types'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

const uploadUrl = process.env.VUE_APP_API_BASE_URL + '/common/upload'

const err = (error) => {
  const data = error.data

  if (data) {
    switch (data.status) {
      case 90000:
      case 90001:
      case 90002:
      case 90003:
        store.dispatch('ClearUser').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 500)
        })
    }
    notification.error({
      message: '操作失败',
      description: data.message
    })
  } else {
    notification.error({
      key: 'NETWORK_ERROR',
      message: '连接服务器失败',
      description: '请检查您的网络连接配置'
    })
  }
}

// request interceptor
request.interceptors.request.use(config => {
  const token = storage.get(ACCESS_TOKEN)
  const userId = storage.get(USER_ID)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers['X-USER-TOKEN'] = token
  }
  if (userId) {
    config.headers['X-USER-ID'] = userId
  }
  config.headers['X-SOURCE'] = 'web'
  return config
}, err)

// response interceptor
request.interceptors.response.use((response) => {
  const data = response.data
  if (data && data.status === 10000) {
    return data
  } else {
    throw err(response)
  }
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios,
  uploadUrl
}
