import request from '@/utils/request'

const modulePath = '/task'

const api = {
  tasklogList: modulePath + '/list',
  addTaskLog: modulePath
}

export function getTaskList (parameter) {
  return request({
    url: api.tasklogList,
    method: 'get',
    params: parameter
  })
}

export function addTask (parameter) {
  return request({
    url: api.addTaskLog,
    method: 'post',
    params: parameter
  })
}

export function editTask (parameter) {
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delTask (jobGroup, jobName) {
  return request({
    url: modulePath + '/' + jobGroup + '/' + jobName,
    method: 'delete'
  })
}

export function pauseTask (jobGroup, jobName) {
  return request({
    url: modulePath + '/pause/' + jobGroup + '/' + jobName,
    method: 'put'
  })
}

export function resumeTask (jobGroup, jobName) {
  return request({
    url: modulePath + '/resume/' + jobGroup + '/' + jobName,
    method: 'put'
  })
}
