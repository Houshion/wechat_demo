import Vue from 'vue'
import wechatAuth from './wechatAuth' //微信登录插件
import router from '@/xhamy/router'
import store from '@/store'

import {
  wechatAppid,
  wechatLogin
} from '@/config.js'

import wechat from './jssdk'
Vue.prototype.wechat = wechat;

/**
 * 引用vuex存储数据
 */
/* const qs = require('qs');
router.beforeEach((to, from, next) => {
  if (store.state.loginStatus == 0) {
    //微信未授权登录跳转到授权登录页面
    let url = window.location.href
    //解决重复登录url添加重复的code与state问题
    let parseUrl = qs.parse(url.split('?')[1])
    let loginUrl
    if (parseUrl.code && parseUrl.state) {
      delete parseUrl.code //删除URL参数code
      delete parseUrl.state //删除URL参数state
      loginUrl = `${url.split('?')[0]}?${qs.stringify(parseUrl)}`
    } else {
      loginUrl = url
    }
    wechatAuth.redirect_uri = loginUrl
    store.dispatch('setLoginStatus', 1)
    window.location.href = wechatAuth.authUrl
  } else if (store.state.loginStatus == 1) {

    try {
      wechatAuth.returnFromWechat(location.href)
    } catch (err) {
      store.dispatch('setLoginStatus', 0)
      next()
    }
    wechatLogin(wechatAuth.code, res => {
      console.log(res)
      if (res.code == 1) {
        store.dispatch("setUserInfo", res.data)
        store.dispatch('setLoginStatus', 2)
      } else {
        store.dispatch('setLoginStatus', 0)
      }
      next()
    })
    // store.dispatch('loginWechatAuth', wechatAuth.code).then((res) => {
    //   if (res.status == 1) {
    //     store.dispatch('setLoginStatus', 2)
    //   } else {
    //     store.dispatch('setLoginStatus', 0)
    //   }
    //   next()
    // }).catch((err) => {
    //   next()
    // })
  } else {
    next()
  }
}) */
// Vue.use(wechatAuth, {
//   appid: wechatAppid, // 微信公众号APPID
// })