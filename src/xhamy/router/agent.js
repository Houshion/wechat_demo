export default [{
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
            title: '运营中心',
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
            title: '场地详情',
        }
    },
    {
        path: '/agent/device',
        name: 'agent/device',
        component: () => import('@/xhamy/views/agentSide/device'),
        meta: {
            title: '我的设备',
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
            title: '提现申请',
        }
    },
    {
        path: '/agent/user/withdraw',
        name: 'agent/user/withdraw',
        component: () => import('@/xhamy/views/agentSide/user/withdraw.vue'),
        meta: {
            title: '提现申请',
        }
    },
    {
        path: '/agent/error',
        name: 'agent/error',
        component: () => import('@/xhamy/views/agentSide/error'),
        meta: {
            title: '故障列表',
        }
    },
    {
        path: '/agent/booking',
        name: 'agent/booking',
        component: () => import('@/xhamy/views/agentSide/booking'),
        meta: {
            title: '预约订单',
        }
    },
]