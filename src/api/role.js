import request from '@/utils/request'

const modulePath = '/role'

const api = {
    roleList: modulePath + '/page',
    roleAll: modulePath + '/all',
    addRole: modulePath
}

export function getRoleList (parameter) {
    return request({
        url: api.roleList,
        method: 'get',
        params: parameter
    })
}

export function getUserRoles (userId) {
    return request({
        url: modulePath + '/' + userId + '/list',
        method: 'get'
    })
}

export function getGroupRoles (groupId) {
    return request({
        url: modulePath + '/group/' + groupId + '/list',
        method: 'get'
    })
}

export function getRoleAll (parameter) {
    return request({
        url: api.roleAll,
        method: 'get',
        params: parameter
    })
}

export function getRoleInfo (roleId) {
    return request({
        url: modulePath + '/' + roleId,
        method: 'get'
    })
}

export function addRole (parameter) {
    return request({
        url: api.addRole,
        method: 'post',
        params: parameter
    })
}

export function editRole (parameter) {
    return request({
        url: modulePath,
        method: 'put',
        params: parameter
    })
}

export function delRole (roleId) {
    return request({
        url: modulePath + '/' + roleId,
        method: 'delete'
    })
}
