import request from '@/utils/request'

const modulePath = '/roleResourceMapping'

const api = {
  roleresourcemappingList: modulePath + '/page',
  roleresourcemappingAll: modulePath + '/all',
  addRoleResourceMapping: modulePath
}

export function getRoleResourceMappingList (parameter) {
  return request({
    url: api.roleresourcemappingList,
    method: 'get',
    params: parameter
  })
}

export function getRoleResourceMappingAll (parameter) {
  return request({
    url: api.roleresourcemappingAll,
    method: 'get',
    params: parameter
  })
}

export function getRoleResourceMappingInfo (id) {
  return request({
    url: modulePath + '/' + id,
    method: 'get'
  })
}

export function addRoleResourceMapping (parameter) {
  return request({
    url: api.addRoleResourceMapping,
    method: 'post',
    params: parameter
  })
}

export function editRoleResourceMapping (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delRoleResourceMapping (id) {
  console.log('id', id)
  return request({
    url: modulePath + '/' + id,
    method: 'delete'
  })
}
