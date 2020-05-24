import request from '@/utils/request'

const modulePath = '/taskLog'

const api = {
  tasklogList: modulePath + '/range',
  tasklogAll: modulePath + '/all',
  addTaskLog: modulePath
}

export function getTaskLogList (parameter) {
  return request({
    url: api.tasklogList,
    method: 'get',
    params: parameter
  })
}

export function getTaskLogAll (parameter) {
  return request({
    url: api.tasklogAll,
    method: 'get',
    params: parameter
  })
}

export function getTaskLogInfo (taskLogId) {
  return request({
    url: modulePath + '/' + taskLogId,
    method: 'get'
  })
}

export function addTaskLog (parameter) {
  return request({
    url: api.addTaskLog,
    method: 'post',
    params: parameter
  })
}

export function editTaskLog (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delTaskLog (taskLogId) {
  console.log('taskLogId', taskLogId)
  return request({
    url: modulePath + '/' + taskLogId,
    method: 'delete'
  })
}
