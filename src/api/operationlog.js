import request from '@/utils/request'

const modulePath = '/operationLog'

const api = {
  operationlogList: modulePath + '/page',
  operationlogAll: modulePath + '/all',
  addOperationLog: modulePath
}

export function getOperationLogList (parameter) {
  return request({
    url: api.operationlogList,
    method: 'get',
    params: parameter
  })
}

export function getOperationLogAll (parameter) {
  return request({
    url: api.operationlogAll,
    method: 'get',
    params: parameter
  })
}

export function getOperationLogInfo (logId) {
  return request({
    url: modulePath + '/' + logId,
    method: 'get'
  })
}

export function addOperationLog (parameter) {
  return request({
    url: api.addOperationLog,
    method: 'post',
    params: parameter
  })
}

export function editOperationLog (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delOperationLog (logId) {
  console.log('logId', logId)
  return request({
    url: modulePath + '/' + logId,
    method: 'delete'
  })
}
