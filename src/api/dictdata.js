import request from '@/utils/request'

const modulePath = '/dictData'

const api = {
  dictdataList: modulePath + '/page',
  dictdataAll: modulePath + '/all',
  addDictData: modulePath
}

export function getDictDataList (parameter) {
  return request({
    url: api.dictdataList,
    method: 'get',
    params: parameter
  })
}

export function getDictDataAll (parameter) {
  return request({
    url: api.dictdataAll,
    method: 'get',
    params: parameter
  })
}

export function getDictDataInfo (dictDataId) {
  return request({
    url: modulePath + '/' + dictDataId,
    method: 'get'
  })
}

export function addDictData (parameter) {
  return request({
    url: api.addDictData,
    method: 'post',
    params: parameter
  })
}

export function editDictData (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delDictData (dictDataId) {
  console.log('dictDataId', dictDataId)
  return request({
    url: modulePath + '/' + dictDataId,
    method: 'delete'
  })
}
