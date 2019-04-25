import {
    baseApi,
    appid,
    login
} from "~xh/config"

// axios请求地址
export let baseUrl = baseApi

// 微信appid
export let wechatAppid = appid

// 微信授权登录，前端用code换取token方法
export function wechatLogin(code, call) {
    return login(code, call)
}