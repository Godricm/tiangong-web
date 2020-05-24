import request from '@/utils/request'

const modulePath = '/user'

const api = {
  userList: modulePath + '/page',
  addUser: modulePath
}

export function getUserList (parameter) {
  return request({
    url: api.userList,
    method: 'get',
    params: parameter
  })
}

export function getUserInfo (userId) {
  return request({
    url: api.modulePath + '/' + userId,
    method: 'get'
  })
}

export function addUser (parameter) {
  return request({
    url: api.addUser,
    method: 'post',
    params: parameter
  })
}

export function editUser (userId, parameter) {
  console.log('userId', userId)
  console.log('parameter', parameter)
  return request({
    url: modulePath + '/' + userId,
    method: 'put',
    params: parameter
  })
}

export function delUser (userId) {
  console.log('userId', userId)
  return request({
    url: modulePath + '/' + userId,
    method: 'delete'
  })
}
