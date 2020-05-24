import request from '@/utils/request'

const modulePath = '/userGroupMapping'

const api = {
  usergroupmappingList: modulePath + '/page',
  usergroupmappingAll: modulePath + '/all',
  addUserGroupMapping: modulePath
}

export function getUserGroupMappingList (parameter) {
  return request({
    url: api.usergroupmappingList,
    method: 'get',
    params: parameter
  })
}

export function getUserGroupMappingAll (parameter) {
  return request({
    url: api.usergroupmappingAll,
    method: 'get',
    params: parameter
  })
}

export function getUserGroupMappingInfo (mappingId) {
  return request({
    url: modulePath + '/' + mappingId,
    method: 'get'
  })
}

export function addUserGroupMapping (parameter) {
  return request({
    url: api.addUserGroupMapping,
    method: 'post',
    params: parameter
  })
}

export function editUserGroupMapping (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delUserGroupMapping (mappingId) {
  console.log('mappingId', mappingId)
  return request({
    url: modulePath + '/' + mappingId,
    method: 'delete'
  })
}
