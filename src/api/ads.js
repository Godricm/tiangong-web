import request from '@/utils/request'

const modulePath = '/ads'

const api = {
  adsList: modulePath + '/page',
  adsAll: modulePath + '/all',
  addAds: modulePath
}

export function getAdsList (parameter) {
  return request({
    url: api.adsList,
    method: 'get',
    params: parameter
  })
}

export function getAdsAll (parameter) {
  return request({
    url: api.adsAll,
    method: 'get',
    params: parameter
  })
}

export function getAdsInfo (adsId) {
  return request({
    url: modulePath + '/' + adsId,
    method: 'get'
  })
}

export function addAds (parameter) {
  return request({
    url: api.addAds,
    method: 'post',
    params: parameter
  })
}

export function editAds (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delAds (adsId) {
  console.log('adsId', adsId)
  return request({
    url: modulePath + '/' + adsId,
    method: 'delete'
  })
}
