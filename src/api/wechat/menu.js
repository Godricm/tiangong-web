import request from '@/utils/request'

const modulePath = '/manager/wxMenu'

const api = {
    menuList: modulePath + '/getMenu',
    updateMenu: modulePath + '/updateMenu'
}

export function getMenu () {
    return request({
        url: api.menuList,
        method: 'get'
    })
}

export function updateMenu (parameter) {
    return request({
        url: api.updateMenu,
        method: 'post',
        params: parameter
    })
}
