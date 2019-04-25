export default [{
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
        path: '/qrCode',
        name: 'qrCode',
        component: () => import('@/xhamy/views/userSide/qrCode'),
        meta: {
            title: '公众号二维码',
        }
    },
    {
        path: '/using',
        name: 'using',
        component: () => import('@/xhamy/views/userSide/using'),
        meta: {
            title: '使用中',
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
]