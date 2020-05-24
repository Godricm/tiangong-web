import request from '@/utils/request'
import md5 from 'md5'

const moudulePath = '/user'

const api = {
    userList: moudulePath + '/page',
    userAll: moudulePath + '/all',
    addUser: moudulePath,
    reset: moudulePath + '/reset'
}

export function getUserList (parameter) {
    return request({
        url: api.userList,
        method: 'get',
        params: parameter
    })
}

export function getUserAll (parameter) {
    return request({
        url: api.userAll,
        method: 'get',
        params: parameter
    })
}

export function getUserByGroupId (groupId) {
    return request({
        url: moudulePath + '/group/' + groupId + '/list',
        method: 'get'
    })
}

export function getUserInfo (userId) {
    return request({
        url: moudulePath + '/' + userId,
        method: 'get'
    })
}

export function addUser (parameter) {
    parameter.password = md5(parameter.password)
    return request({
        url: api.addUser,
        method: 'post',
        params: parameter
    })
}

export function editUser (userId, parameter) {
    return request({
        url: moudulePath + '/' + userId,
        method: 'put',
        params: parameter
    })
}

export function resetPwd (parameter) {
    parameter.password = md5(parameter.password)
    return request({
        url: api.reset,
        method: 'put',
        params: parameter
    })
}

export function delUser (userId) {
    console.log('userId', userId)
    return request({
        url: moudulePath + '/' + userId,
        method: 'delete'
    })
}
