class tool {
    set macno(val) {
        window.localStorage.setItem("macno", val);
    }

    get macno() {
        return window.localStorage.getItem("macno");
    }

    set deviceMsg(val) {
        JSON.parse(window.localStorage.setItem("deviceMsg", val));
    }

    get deviceMsg() {
        return JSON.parse(window.localStorage.getItem("deviceMsg"));
    }

    set token(val) {
        window.localStorage.setItem("token", val);
    }

    get token() {
        return window.localStorage.getItem("token");
    }

    set orderTc(val) {
        window.localStorage.setItem("orderTc", JSON.stringify(val));
    }

    get orderTc() {
        return JSON.parse(window.localStorage.getItem("orderTc"));
    }

    get couponMsg() {
        return JSON.parse(window.localStorage.getItem("couponMsg"));
    }
    set userMsg(val) {
        window.localStorage.setItem("userMsg", JSON.stringify(val));
    }
    get userMsg() {
        return JSON.parse(window.localStorage.getItem("userMsg"));
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(tool)
}

let tools = new tool()

export default tools