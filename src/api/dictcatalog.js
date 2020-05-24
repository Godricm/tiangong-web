import request from '@/utils/request'

const modulePath = '/dictCatalog'

const api = {
  dictcatalogList: modulePath + '/page',
  dictcatalogAll: modulePath + '/all',
  addDictCatalog: modulePath
}

export function getDictCatalogList (parameter) {
  return request({
    url: api.dictcatalogList,
    method: 'get',
    params: parameter
  })
}

export function getDictCatalogAll (parameter) {
  return request({
    url: api.dictcatalogAll,
    method: 'get',
    params: parameter
  })
}

export function getDictCatalogInfo (dictId) {
  return request({
    url: modulePath + '/' + dictId,
    method: 'get'
  })
}

export function addDictCatalog (parameter) {
  return request({
    url: api.addDictCatalog,
    method: 'post',
    params: parameter
  })
}

export function editDictCatalog (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delDictCatalog (dictId) {
  console.log('dictId', dictId)
  return request({
    url: modulePath + '/' + dictId,
    method: 'delete'
  })
}
