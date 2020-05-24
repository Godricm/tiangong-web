import request from '@/utils/request'

const modulePath = '/resource'

const api = {
  resourceList: modulePath + '/list',
  resourceAll: modulePath + '/all',
  addResource: modulePath
}

export default api

export function getResourceList (parameter) {
  return request({
    url: api.resourceList,
    method: 'get',
    params: parameter
  })
}

export function getResourceAll (parameter) {
  return request({
    url: api.resourceAll,
    method: 'get',
    params: parameter
  })
}

export function getResourceInfo (resourceId) {
  return request({
    url: modulePath + '/' + resourceId,
    method: 'get'
  })
}

export function bindRoleResource (roleId, parameter) {
  return request({
    url: modulePath + '/bind/' + roleId,
    method: 'put',
    params: parameter
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
  return request({
    url: modulePath + '/' + resourceId,
    method: 'put',
    params: parameter
  })
}

export function delResource (resourceId) {
  return request({
    url: modulePath + '/' + resourceId,
    method: 'delete'
  })
}
