import request from '@/utils/request'

const modulePath = '/v1/userRoleMapping'

const api = {
  userrolemappingList: modulePath + '/page',
  userrolemappingAll: modulePath + '/all',
  addUserRoleMapping: modulePath
}
export function getUserRoleMappingList (parameter) {
  return request({
    url: api.userrolemappingList,
    method: 'get',
    params: parameter
  })
}

export function getUserRoleMappingAll (parameter) {
  return request({
    url: api.userrolemappingAll,
    method: 'get',
    params: parameter
  })
}

export function getUserRoleMappingInfo (id) {
  return request({
    url: modulePath + '/' + id,
    method: 'get'
  })
}

export function addUserRoleMapping (parameter) {
  return request({
    url: api.addUserRoleMapping,
    method: 'post',
    params: parameter
  })
}

export function editUserRoleMapping (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delUserRoleMapping (id) {
  console.log('id', id)
  return request({
    url: modulePath + '/' + id,
    method: 'delete'
  })
}
