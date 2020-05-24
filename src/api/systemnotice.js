import request from '@/utils/request'

const modulePath = '/systemNotice'

const api = {
  systemnoticeList: modulePath + '/page',
  systemnoticeAll: modulePath + '/all',
  addSystemNotice: modulePath
}

export function getSystemNoticeList (parameter) {
  return request({
    url: api.systemnoticeList,
    method: 'get',
    params: parameter
  })
}

export function getSystemNoticeAll (parameter) {
  return request({
    url: api.systemnoticeAll,
    method: 'get',
    params: parameter
  })
}

export function getSystemNoticeInfo (noticeId) {
  return request({
    url: modulePath + '/' + noticeId,
    method: 'get'
  })
}

export function addSystemNotice (parameter) {
  return request({
    url: api.addSystemNotice,
    method: 'post',
    params: parameter
  })
}

export function editSystemNotice (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delSystemNotice (noticeId) {
  console.log('noticeId', noticeId)
  return request({
    url: modulePath + '/' + noticeId,
    method: 'delete'
  })
}
