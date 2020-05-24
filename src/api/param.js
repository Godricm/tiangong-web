import request from '@/utils/request'

const modulePath = '/param'

const api = {
  paramList: modulePath + '/page',
  paramAll: modulePath + '/all',
  addParam: modulePath
}

export function getParamList (parameter) {
  return request({
    url: api.paramList,
    method: 'get',
    params: parameter
  })
}

export function getParamAll (parameter) {
  return request({
    url: api.paramAll,
    method: 'get',
    params: parameter
  })
}

export function getParamInfo (paramId) {
  return request({
    url: modulePath + '/' + paramId,
    method: 'get'
  })
}

export function addParam (parameter) {
  return request({
    url: api.addParam,
    method: 'post',
    params: parameter
  })
}

export function editParam (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delParam (paramId) {
  console.log('paramId', paramId)
  return request({
    url: modulePath + '/' + paramId,
    method: 'delete'
  })
}
