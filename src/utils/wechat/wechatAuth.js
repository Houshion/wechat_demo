/**
 * @author Ocean
 * @param time 2018-11-11
 * @param memo 微信授权
 */

import base from "@/utils/o_base.js"

const qs = require('qs')
//应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
const SCOPES = ['snsapi_base', 'snsapi_userinfo']

class VueWechatAuthPlugin {

  constructor() {
    this.appid = null
    this.redirect_uri = null
    // this.scope = SCOPES[1] // ['snsapi_base', 'snsapi_userinfo']
    this.scope = 'snsapi_userinfo' // ['snsapi_base', 'snsapi_userinfo']
    this._code = null
    this._redirect_uri = null
  }

  install(Vue, options) {
    let wechatAuth = this
    this.setAppId(options.appid)
    Vue.mixin({
      created: function () {
        this.$wechatAuth = wechatAuth
      },
    })

  }

  static makeState() {
    return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
  }

  setAppId(appid) {
    this.appid = appid
  }

  set redirect_uri(redirect_uri) {
    this._redirect_uri = encodeURIComponent(redirect_uri)
    // this._redirect_uri = encodeURIComponent('http://bjxhamy.app.xiaozhuschool.com/h5test/#/')
  }

  get redirect_uri() {
    return this._redirect_uri
  }

  get state() {
    return localStorage.getItem('wechat_auth:state')
  }

  set state(state) {
    localStorage.setItem('wechat_auth:state', state)
  }

  get authUrl() {
    if (this.appid === null) {
      throw 'appid不能为空'
    }
    if (this.redirect_uri === null) {
      throw 'redirect uri不能为空'
    }
    this.state = VueWechatAuthPlugin.makeState()
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${this.redirect_uri}&response_type=code&scope=${this.scope}&state=${this.state}#wechat_redirect`
    // return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=http://hzchuangd.app.xiaozhuschool.com/h5/dist/controlor.html&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`

  }

  returnFromWechat(redirect_uri) {
    let parsedUrl = qs.parse(redirect_uri.split('?')[1])
    if (process.env.NODE_ENV === 'development') {
      // console.log('parsedUrl: ', parsedUrl)
      this.state = null
      this._code = parsedUrl.code
    } else {
      if (this.state === null) {
        throw '已经设置了state'
      }
      if (parsedUrl.state.split('#')[0] === this.state) {
        this.state = null
        this._code = parsedUrl.code
      } else {
        this.state = null
        throw `错误的state: ${parsedUrl.state}`
      }
    }
  }

  get code() {
    if (this._code === null) {
      console.log("无法获取code!")
      throw '无法获取code!'
    }
    // console.log(this)
    // console.log('this._code: ' + this._code)
    let code = this._code
    this._code = null
    // console.log('code: ' + code)
    return code
  }
}

const vueWechatAuthPlugin = new VueWechatAuthPlugin()

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueWechatAuthPlugin)
}

export default vueWechatAuthPlugin