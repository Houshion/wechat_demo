// 注入鑫海按摩椅相关
import xhamyTool from "~xh/tools"
class tool extends (xhamyTool) {
    // 设备号相关处理
    set macno(val) {
        window.localStorage.setItem("macno", val);
    }
    get macno() {
        return window.localStorage.getItem("macno");
    }
    // 设备信息相关处理
    set deviceMsg(val) {
        window.localStorage.setItem("deviceMsg", JSON.stringify(val));
    }
    get deviceMsg() {
        return JSON.parse(window.localStorage.getItem("deviceMsg"));
    }
    // token相关处理
    set token(val) {
        window.localStorage.setItem("token", val);
    }
    get token() {
        return window.localStorage.getItem("token");
    }
    // 优惠券相关处理
    set couponMsg(val) {
        window.localStorage.setItem("couponMsg", JSON.stringify(val));
    }
    get couponMsg() {
        return JSON.parse(window.localStorage.getItem("couponMsg"));
    }
    // 个人信息相关处理
    set userMsg(val) {
        window.localStorage.setItem("userMsg", JSON.stringify(val));
    }
    get userMsg() {
        return JSON.parse(window.localStorage.getItem("userMsg"));
    }

    // 北京鑫海按摩椅项目使用方法
    get xhamy() {
        return xhamyTool
    }

    env() {
        return process.env.NODE_ENV;
        if (process.env.NODE_ENV === "development") return "development";   //开发环境
        return 'production'                                                 //线上环境
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(tool)
}

let tools = new tool()

export default tools