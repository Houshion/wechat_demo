import Vue from 'vue'
import App from './App.vue'
import router from '@/xhamy/router'
import store from './store/index.js'

import oceansComponents from "@/components/oceans"
Vue.use(oceansComponents)

// 引入公共样式
import "@/assets/css/o_index.less";
import "@/assets/css/o_loading.less";
// import "@/assets/css/o_style.css";
import "@/assets/css/o_color.less";

// 全局引入axios请求
import axios from "@/utils/axios";
Vue.prototype.axios = axios;

// 全局引入公共函数
import o_base from '@/utils/o_base'
Vue.prototype.base = o_base

/**** 全局引用filters过滤器 ****/
// 全局方法Vue.filter()统一注册自定义过滤器
import * as filters from "@/utils/filters"
Object.keys(filters).forEach(key => { //返回filters对象中属性名组成的数组
  Vue.filter(key, filters[key])
})

import tools from "@/utils/tools"
Vue.prototype.tool = tools

// 引入微信登录授权
// import "@/utils/wechat"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})