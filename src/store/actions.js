import * as types from './mutationTypes'
import axios from "@/utils/axios"
import {
  saveToken,
  saveLoginStatus,
  saveUserInfo,
  removeToken,
  removeUserInfo,
}
  from '@/utils/cache'

//登录相关
export const loginWechatAuth = function ({
  commit,
  state
}, query) {
  let data = {
    code: query,
  }
  return new Promise(((resolve, reject) => {
    axios.post("http://hzchuangd.app.xiaozhuschool.com/api/public/wx_oauth", {
      params: data
    }).then((res1, error) => {
      if (res1) {
        resolve(res1)
      } else {
        reject(error)
      }
    })


  }))
}

//设置状态
export const setLoginStatus = function ({
  commit,
  state
}, query) {
  if (query == 0 || query == 1) {
    //上线打开注释，本地调试注释掉
    removeToken()
    removeUserInfo()
  }
  commit(types.SET_LOGIN_STATUS, saveLoginStatus(query))
}

//保存用户个人信息
export const setUserInfo = function ({
  commit,
  state
}, query) {
  commit(types.SET_USERINFO, saveUserInfo(query))
}
