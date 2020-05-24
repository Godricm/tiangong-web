import request from '@/utils/request'

const modulePath = '/article'

const api = {
  articleList: modulePath + '/pages',
  articleAll: modulePath + '/all',
  addArticle: modulePath
}

export function getArticleList (parameter) {
  return request({
    url: api.articleList,
    method: 'get',
    params: parameter
  })
}

export function getArticleAll (parameter) {
  return request({
    url: api.articleAll,
    method: 'get',
    params: parameter
  })
}

export function getArticleInfo (articleId) {
  return request({
    url: modulePath + '/' + articleId,
    method: 'get'
  })
}

export function addArticle (parameter) {
  return request({
    url: api.addArticle,
    method: 'post',
    params: parameter
  })
}

export function editArticle (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath + '/' + parameter.articleId,
    method: 'put',
    params: parameter
  })
}

export function delArticle (articleId) {
  console.log('articleId', articleId)
  return request({
    url: modulePath + '/' + articleId,
    method: 'delete'
  })
}
