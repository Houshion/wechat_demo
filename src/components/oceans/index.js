import Vue from "vue";
// 引入muse_ui
import "../../muse-ui";
// 引入vant_ui
import "../../vant-ui";
// 引入mint_ui
import "../../mint-ui";
// 引入Ocean自写Toast
import {
  oToast,
  oAlert,
  xToast,
  oConfirm,
  oShowLoading,
  oHideLoading,
} from './oToast/index.js'
Vue.prototype.toast = oToast; //给Vue对象添加toast方法
Vue.prototype.alert = oAlert; //给Vue对象添加alert方法
Vue.prototype.xToast = xToast; //给Vue对象添加Xtoast方法
Vue.prototype.confirm = oConfirm; //给Vue对象添加confirm方法
Vue.prototype.showLoading = oShowLoading; //给Vue对象添加loading方法
Vue.prototype.hideLoading = oHideLoading; //给Vue对象添加hideLoading方法

let Oceans = {}
Oceans.install = function (Vue, options) {
  Vue.component('noData', () => import('~/noData'))
  Vue.component('offline', () => import('~/noData/offline'))
  Vue.component('using', () => import('~/noData/using'))
  Vue.component('oBottomNav', () => import('~/oBottomNav'))
  Vue.component('oButton', () => import('~/oButton'))
  Vue.component('oCountDown', () => import('~/oCountDown'))
  Vue.component('oCountTime', () => import('~/oCountTime'))
  Vue.component('oCoupon', () => import('~/oCoupon'))
  Vue.component('oList', () => import('~/oList'))
  Vue.component('oLogin', () => import('~/oLogin'))
  Vue.component('oOrderList', () => import('~/oOrderList'))
  Vue.component('oPanel', () => import('~/oPanel'))
  Vue.component('oPayWay', () => import('~/oPayWay'))
  Vue.component('oPicker', () => import('~/oPicker'))
  Vue.component('oPickSeat', () => import('~/oPickSeat'))
  Vue.component('oReporting', () => import('~/oReporting'))
  Vue.component('oSwipeCell', () => import('~/oSwipeCell'))
  Vue.component('oSwiper', () => import('~/oSwiper'))
  Vue.component('oWithdraw', () => import('~/oWithdraw'))
  Vue.component('oWithdraw', () => import('~/oWithdraw'))
  Vue.component('oCenter', () => import('~/oPersonCenter'))
  Vue.component('oRefresh', () => import('~/oRefresh'))
  Vue.component('oMap', () => import('~/tMap'))
  /* shop */
  Vue.component('shop', () => import('~/oShop/shop'))
  Vue.component('shopCart', () => import('~/oShop/cart'))
  Vue.component('shopDetail', () => import('~/oShop/shopDetail'))
  Vue.component('addressList', () => import('~/oShop/addressList'))
  Vue.component('addressEdit', () => import('~/oShop/addressEdit'))
}
export default Oceans