import axios from 'axios'
import qs from 'qs'
import {
  baseUrl
} from "@/config.js";
import {
  oShowLoading,
  oHideLoading
} from '@/components/oceans/oToast/index.js'

const _Url = '' //请求地址
// const _Url = 'http://bjxhamy.app.xiaozhuschool.com' //请求地址



axios.defaults.baseURL = process.env.NODE_ENV === "development" ? baseUrl : ''

function getUrl(url) {
  /* 判断传入的url路径是否是http开头 */
  if (url.startsWith('http') || url.startsWith('https')) {
    return url
  }
  /* 不是http开头，进行路径的拼接 */
  return `${_Url}${url}`
}

const Http = {
  get: (url, query) => new Promise((resolve, reject) => {
    /* new Promise 是为进行在vue store里面进行异步传值 */
    var path = getUrl(url)
    /* get请求 */
    axios.get(path, {
      params: query
    }).then((res1, error) => {
      if (res1) {
        resolve(res1)
      } else {
        reject(error)
      }
    })
  }),

  post: (url, query, config) => new Promise((resolve, reject) => {
    /* new Promise 是为进行在vue store里面进行异步传值 */
    var path = getUrl(url)
    process.env.NODE_ENV === "development" ? query.token = window.localStorage.getItem("token") : ''
    /* post请求 */
    oShowLoading()
    axios({
      url: path,
      method: 'post',
      data: qs.stringify(query),
      headers: config ? config : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res1, error) => {
      // oHideLoading()
      if (res1) {
        resolve(res1.data)
      } else {
        reject(error)
      }
    })
  })
}

export default Http