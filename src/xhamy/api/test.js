import {
    request
} from "@/utils/request";

export function testApi(params) {
    return request({
        method: 'post',
        url: '/wxsite/user/api321',
        params: params
    })
}