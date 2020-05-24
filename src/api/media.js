import request from '@/utils/request'

const modulePath = '/media'

const api = {
  mediaList: modulePath + '/page',
  mediaAll: modulePath + '/all',
  addMedia: modulePath
}

export function getMediaList (parameter) {
  return request({
    url: api.mediaList,
    method: 'get',
    params: parameter
  })
}

export function getMediaAll (parameter) {
  return request({
    url: api.mediaAll,
    method: 'get',
    params: parameter
  })
}

export function getMediaInfo (id) {
  return request({
    url: modulePath + '/' + id,
    method: 'get'
  })
}

export function addMedia (parameter) {
  return request({
    url: api.addMedia,
    method: 'post',
    params: parameter
  })
}

export function editMedia (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delMedia (id) {
  console.log('id', id)
  return request({
    url: modulePath + '/' + id,
    method: 'delete'
  })
}
