import axios from "@/utils/axios"
import {
    oHideLoading
} from "~/oToast"

export let baseApi = "http://bjxhamy.app.xiaozhuschool.com"

export let appid = 'wx6a088195d7884586'

export function login(code, call) {
    return axios.post("/wxsite/user/api", {
        api_name: "user_info",
        token: window.localStorage.getItem("token")
    }).then(res => {
        oHideLoading()
        call(res)
    })
}