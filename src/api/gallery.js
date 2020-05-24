import request from '@/utils/request'

const modulePath = '/gallery'

const api = {
  galleryList: modulePath + '/page',
  galleryAll: modulePath + '/all',
  addGallery: modulePath
}

export function getGalleryList (parameter) {
  return request({
    url: api.galleryList,
    method: 'get',
    params: parameter
  })
}

export function getGalleryAll (parameter) {
  return request({
    url: api.galleryAll,
    method: 'get',
    params: parameter
  })
}

export function getGalleryInfo (galleryId) {
  return request({
    url: modulePath + '/' + galleryId,
    method: 'get'
  })
}

export function addGallery (parameter) {
  return request({
    url: api.addGallery,
    method: 'post',
    params: parameter
  })
}

export function editGallery (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delGallery (galleryId) {
  console.log('galleryId', galleryId)
  return request({
    url: modulePath + '/' + galleryId,
    method: 'delete'
  })
}
