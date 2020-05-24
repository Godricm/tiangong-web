import request from '@/utils/request'

const modulePath = '/role'

const api = {
  roleList: modulePath + '/page',
  addRole: modulePath
}

export function getRoleList (parameter) {
  return request({
    url: api.roleList,
    method: 'get',
    params: parameter
  })
}

export function addRole (parameter) {
  return request({
    url: api.addRole,
    method: 'post',
    params: parameter
  })
}

export function editRole (roleId, parameter) {
  console.log('roleId', roleId)
  console.log('parameter', parameter)
  return request({
    url: modulePath + '/' + roleId,
    method: 'put',
    params: parameter
  })
}

export function delRole (roleId) {
  console.log('roleId', roleId)
  return request({
    url: modulePath + '/' + roleId,
    method: 'delete'
  })
}
