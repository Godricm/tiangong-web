import request from '@/utils/request'

const modulePath = '/resource'

const api = {
  resourceList: modulePath + '/list',
  addResource: modulePath
}

export function getResourceList (parameter) {
  return request({
    url: api.resourceList,
    method: 'get',
    params: parameter
  })
}

export function getResourceInfo (resourceId) {
  return request({
    url: api.modulePath + '/' + resourceId,
    method: 'get'
  })
}

export function addResource (parameter) {
  return request({
    url: api.addResource,
    method: 'post',
    params: parameter
  })
}

export function editResource (resourceId, parameter) {
  console.log('resourceId', resourceId)
  console.log('parameter', parameter)
  return request({
    url: modulePath + '/' + resourceId,
    method: 'put',
    params: parameter
  })
}

export function delResource (resourceId) {
  console.log('resourceId', resourceId)
  return request({
    url: modulePath + '/' + resourceId,
    method: 'delete'
  })
}

export function getUserResources (userId) {
  return request({
    url: modulePath + '/' + userId + '/list',
    method: 'get'
  })
}

export function getRoleResources (roleId) {
  return request({
    url: modulePath + '/role/' + roleId + '/list',
    method: 'get'
  })
}
