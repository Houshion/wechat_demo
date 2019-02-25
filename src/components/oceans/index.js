import Vue from "vue";
// 引入muse_ui
import "../../muse_ui";
// 引入vant_ui
import "../../vant-ui";
// 引入Ocean自写Toast
import {
  oToast,
  oAlert,
  xToast,
  oConfirm
} from './oToast/index.js'
Vue.prototype.$toast = oToast; //给Vue对象添加$toast方法
Vue.prototype.$alert = oAlert; //给Vue对象添加$alert方法
Vue.prototype.$xToast = xToast; //给Vue对象添加$Xtoast方法
Vue.prototype.$confirm = oConfirm; //给Vue对象添加$confirm方法

let test = {}
test.install = function (Vue, options) {
  Vue.component('oAlert', () => import('./oAlert'))
  Vue.component('oButton', () => import('./oButton'))
  Vue.component('oCountDown', () => import('./oCountDown'))
  Vue.component('oCountTime', () => import('./oCountTime'))
  Vue.component('oCoupon', () => import('./oCoupon'))
  Vue.component('oList', () => import('./oList'))
  Vue.component('oLogin', () => import('./oLogin'))
  Vue.component('oOrderList', () => import('./oOrderList'))
  Vue.component('oPanel', () => import('./oPanel'))
  Vue.component('oPayWay', () => import('./oPayWay'))
  Vue.component('oPicker', () => import('./oPicker'))
  Vue.component('oPickSeat', () => import('./oPickSeat'))
  Vue.component('oReporting', () => import('./oReporting'))
  Vue.component('oSwipeCell', () => import('./oSwipeCell'))
  Vue.component('oSwiper', () => import('./oSwiper'))
  Vue.component('oWithdraw', () => import('./oWithdraw'))
  Vue.component('tMap', () => import('./tMap'))
}
export default test