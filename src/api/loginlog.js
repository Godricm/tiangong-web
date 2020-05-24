import request from '@/utils/request'

const modulePath = '/loginLog'

const api = {
  loginlogList: modulePath + '/page',
  loginlogAll: modulePath + '/all',
  addLoginLog: modulePath
}

export default api

export function getLoginLogList (parameter) {
  return request({
    url: api.loginlogList,
    method: 'get',
    params: parameter
  })
}

export function getLoginLogAll (parameter) {
  return request({
    url: api.loginlogAll,
    method: 'get',
    params: parameter
  })
}

export function getLoginLogInfo (logId) {
  return request({
    url: modulePath + '/' + logId,
    method: 'get'
  })
}

export function addLoginLog (parameter) {
  return request({
    url: api.addLoginLog,
    method: 'post',
    params: parameter
  })
}

export function editLoginLog (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delLoginLog (logId) {
  console.log('logId', logId)
  return request({
    url: modulePath + '/' + logId,
    method: 'delete'
  })
}
