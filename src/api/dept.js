import request from '@/utils/request'

const modulePath = '/dept'

const api = {
    deptList: modulePath + '/page',
    deptAll: modulePath + '/all',
    deptTreeList: modulePath + '/list',
    addDept: modulePath
}

export function getDeptList (parameter) {
    return request({
        url: api.deptList,
        method: 'get',
        params: parameter
    })
}

export function getDeptTreeList (parameter) {
    return request({
        url: api.deptTreeList,
        method: 'get',
        params: parameter
    })
}

export function getUserDepts (userId) {
    return request({
        url: modulePath + '/' + userId + '/list',
        method: 'get'
    })
}

export function getDeptAll (parameter) {
    return request({
        url: api.deptAll,
        method: 'get',
        params: parameter
    })
}

export function getDeptInfo (deptId) {
    return request({
        url: modulePath + '/' + deptId,
        method: 'get'
    })
}

export function addDept (parameter) {
    return request({
        url: api.addDept,
        method: 'post',
        params: parameter
    })
}

export function editDept (parameter) {
    return request({
        url: modulePath,
        method: 'put',
        params: parameter
    })
}

export function delDept (deptId) {
    return request({
        url: modulePath + '/' + deptId,
        method: 'delete'
    })
}
