import request from '@/utils/request'

const modulePath = '/articleContent'

const api = {
  articlecontentList: modulePath + '/page',
  articlecontentAll: modulePath + '/all',
  addArticleContent: modulePath
}

export function getArticleContentList (parameter) {
  return request({
    url: api.articlecontentList,
    method: 'get',
    params: parameter
  })
}

export function getArticleContentAll (parameter) {
  return request({
    url: api.articlecontentAll,
    method: 'get',
    params: parameter
  })
}

export function getArticleContentInfo (contentId) {
  return request({
    url: modulePath + '/' + contentId,
    method: 'get'
  })
}

export function addArticleContent (parameter) {
  return request({
    url: api.addArticleContent,
    method: 'post',
    params: parameter
  })
}

export function editArticleContent (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delArticleContent (contentId) {
  console.log('contentId', contentId)
  return request({
    url: modulePath + '/' + contentId,
    method: 'delete'
  })
}
