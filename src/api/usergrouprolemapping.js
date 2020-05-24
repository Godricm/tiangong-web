import request from '@/utils/request'

const modulePath = '/v1/userGroupRoleMapping'

const api = {
  usergrouprolemappingList: modulePath + '/page',
  usergrouprolemappingAll: modulePath + '/all',
  addUserGroupRoleMapping: modulePath
}

export function getUserGroupRoleMappingList (parameter) {
  return request({
    url: api.usergrouprolemappingList,
    method: 'get',
    params: parameter
  })
}

export function getUserGroupRoleMappingAll (parameter) {
  return request({
    url: api.usergrouprolemappingAll,
    method: 'get',
    params: parameter
  })
}

export function getUserGroupRoleMappingInfo (mappingId) {
  return request({
    url: modulePath + '/' + mappingId,
    method: 'get'
  })
}

export function addUserGroupRoleMapping (parameter) {
  return request({
    url: api.addUserGroupRoleMapping,
    method: 'post',
    params: parameter
  })
}

export function editUserGroupRoleMapping (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delUserGroupRoleMapping (mappingId) {
  console.log('mappingId', mappingId)
  return request({
    url: modulePath + '/' + mappingId,
    method: 'delete'
  })
}
