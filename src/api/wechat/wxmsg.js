import request from '@/utils/request'

const modulePath = '/manage/wxMsg'

const api = {
  wxmsgList: modulePath + '/page',
  wxmsgAll: modulePath + '/all',
  addWxMsg: modulePath
}

export default api

export function getWxMsgList (parameter) {
  return request({
    url: api.wxmsgList,
    method: 'get',
    params: parameter
  })
}

export function getWxMsgAll (parameter) {
  return request({
    url: api.wxmsgAll,
    method: 'get',
    params: parameter
  })
}

export function getWxMsgInfo (id) {
  return request({
    url: modulePath + '/' + id,
    method: 'get'
  })
}

export function addWxMsg (parameter) {
  return request({
    url: api.addWxMsg,
    method: 'post',
    params: parameter
  })
}

export function editWxMsg (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delWxMsg (id) {
  console.log('id', id)
  return request({
    url: modulePath + '/' + id,
    method: 'delete'
  })
}
