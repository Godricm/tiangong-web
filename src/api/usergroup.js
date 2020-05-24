import request from '@/utils/request'

const modulePath = '/userGroup'

const api = {
  usergroupList: modulePath + '/page',
  usergroupAll: modulePath + '/all',
  addUserGroup: modulePath
}

export function getUserGroupList (parameter) {
  return request({
    url: api.usergroupList,
    method: 'get',
    params: parameter
  })
}

export function getUserGroupAll (parameter) {
  return request({
    url: api.usergroupAll,
    method: 'get',
    params: parameter
  })
}

export function getUserGroupInfo (groupId) {
  return request({
    url: modulePath + '/' + groupId,
    method: 'get'
  })
}

export function addUserGroup (parameter) {
  return request({
    url: api.addUserGroup,
    method: 'post',
    params: parameter
  })
}

export function editUserGroup (parameter) {
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delUserGroup (groupId) {
  return request({
    url: modulePath + '/' + groupId,
    method: 'delete'
  })
}

export function bindUserGroup (groupId, parameter) {
  return request({
    url: modulePath + '/bind/user/' + groupId,
    method: 'put',
    params: parameter
  })
}

export function bindRoleGroup (groupId, parameter) {
  return request({
    url: modulePath + '/bind/role/' + groupId,
    method: 'put',
    params: parameter
  })
}
