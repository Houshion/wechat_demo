import axios from 'axios';
import qs from 'qs';

//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//对外接口
export function request({
    method,
    url,
    params
}) {
    if (method == 'get') {
        return get(url, params);
    } else if (method == 'post') {
        return post(url, params);
    }
}

// 封装get方法
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        })
    });

}

// 封装post方法
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params)).then(res => {
            console.log(res.data)
            resolve(res.data);
        }).catch(err => {
            console.log(err)
            reject(err);
        })

    });
}

//请求拦截(请求发出前处理请求)
/* axios.interceptors.request.use(
    confirm => {
        //将token放入header，这里用Vuex把token放在store中，取出
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    }
) */

// 响应拦截器（处理响应数据）
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            // 可以由后台编辑状态码区分不同情况，做不同的逻辑处理
            return Promise.reject(response);
        }
    },
    error => {
        // 请求失败，可根据error.response.status统一处理一些界面逻辑
        return Promise.reject(error.response);
    }
)