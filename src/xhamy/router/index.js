import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'indexMap',
      component: () => import('@/xhamy/views/userSide/map'),
      meta: {
        title: '共享按摩椅',
      }
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('@/xhamy/views/userSide/booking'),
      meta: {
        title: '预约设备',
      }
    },
    {
      path: '/chooseTc',
      name: 'chooseTc',
      component: () => import('@/xhamy/views/userSide/chooseTc'),
      meta: {
        title: '选择套餐',
      }
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: () => import('@/xhamy/views/userSide/confirmOrder'),
      meta: {
        title: '确认订单',
      }
    },
    {
      path: '/useComment',
      name: 'useComment',
      component: () => import('@/xhamy/views/userSide/useComment'),
      meta: {
        title: '使用说明',
      }
    },
    {
      path: '/chooseType',
      name: 'chooseType',
      component: () => import('@/xhamy/views/userSide/chooseType'),
      meta: {
        title: '选择按摩类型',
      }
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: () => import('@/xhamy/views/userSide/coupon'),
      meta: {
        title: '优惠券',
      }
    },
    {
      path: '/centerInfo',
      name: 'centerInfo',
      component: () => import('@/xhamy/views/userSide/centerInfo'),
      meta: {
        title: '个人中心',
      }
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: () => import('@/xhamy/views/userSide/orderList'),
      meta: {
        title: '订单列表',
      }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: () => import('@/xhamy/views/userSide/aboutUs'),
      meta: {
        title: '关于我们',
      }
    },
    {
      path: '/infomation',
      name: 'infomation',
      component: () => import('@/xhamy/views/userSide/infomation'),
      meta: {
        title: '消息',
      }
    },
    {
      path: '/infomationDetail',
      name: 'infomationDetail',
      component: () => import('@/xhamy/views/userSide/infomation/detail.vue'),
      meta: {
        title: '消息详情',
      }
    },
    {
      path: '/reporting',
      name: 'reporting',
      component: () => import('@/xhamy/views/userSide/reporting'),
      meta: {
        title: '我要报障',
      }
    },
    {
      path: '/bookingOrder',
      name: 'bookingOrder',
      component: () => import('@/xhamy/views/userSide/bookingOrder'),
      meta: {
        title: '预约订单',
      }
    },
    {
      path: '/moneyPakage',
      name: 'moneyPakage',
      component: () => import('@/xhamy/views/userSide/moneyPakage'),
      meta: {
        title: '我的钱包',
      }
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: () => import('@/xhamy/views/userSide/moneyPakage/recharge.vue'),
      meta: {
        title: '充值',
      }
    },
    // 以下为代理商路由
    {
      path: "*",
      redirect: "/"
    },
    {
      path: '/agent',
      name: 'agent',
      component: () => import('@/xhamy/views/agentSide/login'),
      meta: {
        title: '登录',
      }
    },
    {
      path: '/agent/agentCenter',
      name: 'agent/agentCenter',
      component: () => import('@/xhamy/views/agentSide/center'),
      meta: {
        title: '代理商中心',
      }
    },
    {
      path: '/agent/account',
      name: 'agent/account',
      component: () => import('@/xhamy/views/agentSide/account'),
      meta: {
        title: '收入统计',
      }
    },
    {
      path: '/agent/place',
      name: 'agent/place',
      component: () => import('@/xhamy/views/agentSide/place'),
      meta: {
        title: '场地管理',
      }
    },
    {
      path: '/agent/place/placeDetail',
      name: 'agent/place/placeDetail',
      component: () => import('@/xhamy/views/agentSide/place/detail.vue'),
      meta: {
        title: '场地管理',
      }
    },
    {
      path: '/agent/device',
      name: 'agent/device',
      component: () => import('@/xhamy/views/agentSide/device'),
      meta: {
        title: '设备管理',
      }
    },
    {
      path: '/agent/device/deviceDetail',
      name: 'agent/device/deviceDetail',
      component: () => import('@/xhamy/views/agentSide/device/detail.vue'),
      meta: {
        title: '设备详情',
      }
    },
    {
      path: '/agent/order',
      name: 'agent/order',
      component: () => import('@/xhamy/views/agentSide/order'),
      meta: {
        title: '订单管理',
      }
    },
    {
      path: '/agent/order/orderDetail',
      name: 'agent/order/orderDetail',
      component: () => import('@/xhamy/views/agentSide/order/detail.vue'),
      meta: {
        title: '订单详情',
      }
    },
    {
      path: '/agent/user',
      name: 'agent/user',
      component: () => import('@/xhamy/views/agentSide/user'),
      meta: {
        title: '账户管理',
      }
    },
    {
      path: '/agent/user/withdraw',
      name: 'agent/user/withdraw',
      component: () => import('@/xhamy/views/agentSide/user/withdraw.vue'),
      meta: {
        title: '账户管理',
      }
    },
    {
      path: '/agent/error',
      name: 'agent/error',
      component: () => import('@/xhamy/views/agentSide/error'),
      meta: {
        title: '故障管理',
      }
    },
    {
      path: '/agent/booking',
      name: 'agent/booking',
      component: () => import('@/xhamy/views/agentSide/booking'),
      meta: {
        title: '预约管理',
      }
    },
  ]
})