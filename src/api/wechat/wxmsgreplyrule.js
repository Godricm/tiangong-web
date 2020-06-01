import request from '@/utils/request'

const modulePath = '/wxMsgReplyRule'

const api = {
  wxmsgreplyruleList: modulePath + '/page',
  wxmsgreplyruleAll: modulePath + '/all',
  addWxMsgReplyRule: modulePath
}

export default api

export function getWxMsgReplyRuleList (parameter) {
  return request({
    url: api.wxmsgreplyruleList,
    method: 'get',
    params: parameter
  })
}

export function getWxMsgReplyRuleAll (parameter) {
  return request({
    url: api.wxmsgreplyruleAll,
    method: 'get',
    params: parameter
  })
}

export function getWxMsgReplyRuleInfo (ruleId) {
  return request({
    url: modulePath + '/' + ruleId,
    method: 'get'
  })
}

export function addWxMsgReplyRule (parameter) {
  return request({
    url: api.addWxMsgReplyRule,
    method: 'post',
    params: parameter
  })
}

export function editWxMsgReplyRule (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delWxMsgReplyRule (ruleId) {
  console.log('ruleId', ruleId)
  return request({
    url: modulePath + '/' + ruleId,
    method: 'delete'
  })
}
