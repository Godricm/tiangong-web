import request from '@/utils/request'

const userApi = {
  modulePath: '/user',
  Login: '/user/login',
  Logout: '/user/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/',
  UserMenu: '/user/nav'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return request({
    url: userApi.Login,
    method: 'put',
    params: parameter
  })
}

export function getSmsCaptcha (parameter) {
  return request({
    url: userApi.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo (userId) {
  return request({
    url: userApi.UserInfo,
    method: 'get' + userId
  })
}

export function getCurrentUserNav () {
  return request({
    url: userApi.UserMenu,
    method: 'get'
  })
}

export function refreshUserAuthCache (userId) {
  return request({
    url: userApi.modulePath + '/authcache/' + userId,
    method: 'put'
  })
}

export function logout (userId) {
  return request({
    url: userApi.Logout + '/' + userId,
    method: 'put'
  })
}
