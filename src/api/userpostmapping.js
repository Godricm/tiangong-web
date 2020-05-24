import request from '@/utils/request'

const modulePath = '/userPostMapping'

const api = {
  userpostmappingList: modulePath + '/page',
  userpostmappingAll: modulePath + '/all',
  addUserPostMapping: modulePath
}

export function getUserPostMappingList (parameter) {
  return request({
    url: api.userpostmappingList,
    method: 'get',
    params: parameter
  })
}

export function getUserPostMappingAll (parameter) {
  return request({
    url: api.userpostmappingAll,
    method: 'get',
    params: parameter
  })
}

export function getUserPostMappingInfo (mappingId) {
  return request({
    url: modulePath + '/' + mappingId,
    method: 'get'
  })
}

export function addUserPostMapping (parameter) {
  return request({
    url: api.addUserPostMapping,
    method: 'post',
    params: parameter
  })
}

export function editUserPostMapping (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delUserPostMapping (mappingId) {
  console.log('mappingId', mappingId)
  return request({
    url: modulePath + '/' + mappingId,
    method: 'delete'
  })
}
