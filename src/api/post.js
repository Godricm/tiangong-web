import request from '@/utils/request'

const modulePath = '/post'

const api = {
    postList: modulePath + '/page',
    postAll: modulePath + '/all',
    addPost: modulePath
}

export function getPostList (parameter) {
    return request({
        url: api.postList,
        method: 'get',
        params: parameter
    })
}

export function getUserPosts (userId) {
    return request({
        url: modulePath + '/' + userId + '/list',
        method: 'get'
    })
}

export function getPostAll (parameter) {
    return request({
        url: api.postAll,
        method: 'get',
        params: parameter
    })
}

export function getPostInfo (postId) {
    return request({
        url: modulePath + '/' + postId,
        method: 'get'
    })
}

export function addPost (parameter) {
    return request({
        url: api.addPost,
        method: 'post',
        params: parameter
    })
}

export function editPost (parameter) {
    return request({
        url: modulePath,
        method: 'put',
        params: parameter
    })
}

export function delPost (postId) {
    return request({
        url: modulePath + '/' + postId,
        method: 'delete'
    })
}
