import request from '@/utils/request'

const modulePath = '/gen'

const api = {
  tableList: modulePath + '/tables',
  genCode: modulePath + '/include'
}

export function getTableList (parameter) {
  return request({
    url: api.tableList,
    method: 'get',
    params: parameter
  })
}

export function genCode (parameter) {
  return request({
    url: api.genCode,
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: parameter
  })
}
