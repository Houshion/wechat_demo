import Vue from 'vue'

// ALERT by Ocean
import alert from './vue/alert.vue' //引入组件  
let alertHonor = Vue.extend(alert) // 创建组件构造器

export let oAlert = (obj, cont, refunc) => {
    let alertDom = new alertHonor({
        el: document.createElement('div')
    })
    document.body.appendChild(alertDom.$el)

    let isObj = typeof obj == 'object';
    let content = typeof cont != 'function' ? isObj ? obj.content : cont ? cont : obj : obj;

    alertDom.title = isObj ? obj.title : cont ? typeof cont != 'function' ? obj : '' : '';
    alertDom.content = content;
    alertDom.refunc = isObj ? obj.confirm : isObj ? obj.confirm : refunc;
}


// CONFIRM by Ocean
import confirm from './vue/confirm.vue' //引入组件  
let confirmHonor = Vue.extend(confirm) // 创建组件构造器

export let oConfirm = (obj, cont) => {
    let confirmDom = new confirmHonor({
        el: document.createElement('div')
    })
    document.body.appendChild(confirmDom.$el)

    let isObj = typeof obj == 'object';
    let content = isObj ? obj.content : cont ? cont : obj;

    confirmDom.title = cont ? '' : isObj ? obj.title : obj;
    switch (content) {
        case "name":
            confirmDom.input = true;
            confirmDom.text = false;
            break;
        case "phone":
            confirmDom.input = true;
            confirmDom.text = false;
            confirmDom.maxlength = "11";
            confirmDom.onkeyup = "this.value=this.value.replace(/[^0-9]/g,'')"
            break;
        default:
            confirmDom.input = false;
            confirmDom.text = true;
            confirmDom.content = content;
            break;
    }
    if (isObj) {
        confirmDom.refunc = obj.confirm;
        confirmDom.refunc2 = obj.cancel;
        confirmDom.name = obj.rightBtn;
        confirmDom.name2 = obj.leftBtn;
    }

}

// TOAST by Ocean
import Toast from './vue/toast.vue' //引入组件  
let ToastConstructor = Vue.extend(Toast) // 返回一个“扩展实例构造器”  

export let oToast = (text, position, duration) => {
    let toastDom = new ToastConstructor({
        el: document.createElement('div') //将toast组件挂载到新创建的div上  
    });
    document.body.appendChild(toastDom.$el) //把toast组件的dom添加到body里  

    toastDom.text = text;
    toastDom.duration = duration ? duration : 2000;

    switch (position) {
        case "top":
            toastDom.$el.style.top = '2rem';
            break;
        case "middle":
            toastDom.$el.style.bottom = '50%';
            break;
        default:
            toastDom.$el.style.bottom = '2rem';
            break;
    }

    // 在指定 duration 之后让 toast消失  
    setTimeout(() => {
        toastDom.isShow = false;
    }, toastDom.duration);
}

import Xtoast from './vue/Xtoast.vue' //引入组件  
let XtoastHonor = Vue.extend(Xtoast) // 创建组件构造器

export let xToast = (type, content, call) => {
    let XtoastDom = new XtoastHonor({
        el: document.createElement('div')
    })
    document.body.appendChild(XtoastDom.$el)

    switch (type) {
        case "success":
            XtoastDom.src = require("./img/i_right.png");
            break;
        case "fail":
            XtoastDom.src = require("./img/i_wrong.png");
            break;
        default:
            XtoastDom.src = type;
            break;
    }


    XtoastDom.content = content;
    // 在指定 duration 之后让 toast消失  
    setTimeout(() => {
        XtoastDom.isShow = false;
        call ? call() : ''
    }, 2000);
}

// Loading by Ocean
import loadingDom from './vue/loading.vue' //引入组件  
let loadingHonor = Vue.extend(loadingDom) // 创建组件构造器

let loadDom = new loadingHonor({
    el: document.createElement('div')
});

export let oShowLoading = (content) => {
    document.body.appendChild(loadDom.$el)

    loadDom.isShow = true;
    loadDom.content = content ? content : "请稍候...";
}

export let oHideLoading = () => {
    loadDom.isShow = false;
}