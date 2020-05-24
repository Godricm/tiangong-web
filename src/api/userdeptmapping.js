import request from '@/utils/request'

const modulePath = '/userDeptMapping'

const api = {
  userdeptmappingList: modulePath + '/page',
  userdeptmappingAll: modulePath + '/all',
  addUserDeptMapping: modulePath
}

export function getUserDeptMappingList (parameter) {
  return request({
    url: api.userdeptmappingList,
    method: 'get',
    params: parameter
  })
}

export function getUserDeptMappingAll (parameter) {
  return request({
    url: api.userdeptmappingAll,
    method: 'get',
    params: parameter
  })
}

export function getUserDeptMappingInfo (mappingId) {
  return request({
    url: modulePath + '/' + mappingId,
    method: 'get'
  })
}

export function addUserDeptMapping (parameter) {
  return request({
    url: api.addUserDeptMapping,
    method: 'post',
    params: parameter
  })
}

export function editUserDeptMapping (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delUserDeptMapping (mappingId) {
  console.log('mappingId', mappingId)
  return request({
    url: modulePath + '/' + mappingId,
    method: 'delete'
  })
}
