import request from '@/utils/request'

const modulePath = '/articleCategory'

const api = {
  articlecategoryList: modulePath + '/page',
  articlecategoryAll: modulePath + '/all',
  articlecategoryTree: modulePath + '/tree',
  addArticleCategory: modulePath
}

export default api

export function getArticleCategoryList (parameter) {
  return request({
    url: api.articlecategoryList,
    method: 'get',
    params: parameter
  })
}

export function getArticleCategoryAll (parameter) {
  return request({
    url: api.articlecategoryAll,
    method: 'get',
    params: parameter
  })
}

export function getArticlecategoryTree (parameter) {
  return request({
    url: api.articlecategoryTree,
    method: 'get',
    params: parameter
  })
}

export function getArticleCategoryInfo (articleCategoryId) {
  return request({
    url: modulePath + '/' + articleCategoryId,
    method: 'get'
  })
}

export function addArticleCategory (parameter) {
  return request({
    url: api.addArticleCategory,
    method: 'post',
    params: parameter
  })
}

export function editArticleCategory (parameter) {
  console.log('parameter', parameter)
  return request({
    url: modulePath,
    method: 'put',
    params: parameter
  })
}

export function delArticleCategory (articleCategoryId) {
  console.log('articleCategoryId', articleCategoryId)
  return request({
    url: modulePath + '/' + articleCategoryId,
    method: 'delete'
  })
}
