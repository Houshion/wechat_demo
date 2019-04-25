import axios from "../axios";
import wx from "weixin-js-sdk";
import {
    oToast,
    oShowLoading,
    oHideLoading
} from '@/components/oceans/oToast/index.js'
import {
    wechatAppid
} from '@/config.js'
export default {
    getWx(callback, jsApiList) {
        const _this = this;
        oShowLoading("加载中，请稍候...")
        axios.post("/Wxsite/Device/api", {
            api_name: "get_ticket",
            token: window.localStorage.getItem("token"),
            url: location.href
        }).then(res => {
            // oHideLoading()
            if (res.code == 1) {
                let appId, timestamp, nonceStr, signature;
                if (!res.data.signature) {
                    timestamp = (new Date().getTime() / 1000).toFixed(0);
                    let noncestr = Math.random()
                        .toString(36)
                        .substr(2);
                    // let ticket = wx_js(res.data.data.result.ticket, timestamp, noncestr);
                    let e = decodeURIComponent(
                            "jsapi_ticket=" +
                            res.data.ticket +
                            "&noncestr=" +
                            noncestr +
                            "&timestamp=" +
                            timestamp +
                            "&url=" +
                            location.href.split("#")[0]
                        ),
                        s = new jsSHA(e, "TEXT"),
                        ticket = s.getHash("SHA-1", "HEX");
                    // ticket = res.data.data.ticket;
                    // config信息
                    appId = wechatAppid;
                    nonceStr = noncestr;
                    signature = ticket
                } else {
                    appId = res.data.appId;
                    nonceStr = res.data.nonceStr;
                    signature = res.data.signature;
                    timestamp = res.data.timestamp;
                }
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端//alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: appId, // 必填，公众号的唯一标识
                    timestamp: timestamp, // 必填，生成签名的时间戳
                    nonceStr: nonceStr, // 必填，生成签名的随机串
                    signature: signature, // 必填，签名，见附录1
                    jsApiList: jsApiList ? jsApiList : [
                        'updateAppMessageShareData',
                        'updateTimelineShareData',
                        'onMenuShareTimeline', //（即将废弃）
                        'onMenuShareAppMessage', //（即将废弃）
                        'onMenuShareQQ', //（即将废弃）
                        'onMenuShareWeibo',
                        'onMenuShareQZone',
                        'startRecord',
                        'stopRecord',
                        'onVoiceRecordEnd',
                        'playVoice',
                        'pauseVoice',
                        'stopVoice',
                        'onVoicePlayEnd',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'translateVoice',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard',
                    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                return callback ? callback() : ""
            } else {
                oToast(res.msg)
            }
        });
    },
    callpay(jsApiParameters, callback) {
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener(
                    "WeixinJSBridgeReady",
                    jsApiCall,
                    false
                );
            } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", jsApiCall);
                document.attachEvent("onWeixinJSBridgeReady", jsApiCall);
            }
        } else {
            WeixinJSBridge.invoke(
                "getBrandWCPayRequest",
                jsApiParameters, // 提交的支付信息
                function (payBack) {
                    oHideLoading()
                    WeixinJSBridge.log(payBack.err_msg);
                    if (payBack.err_msg != "get_brand_wcpay_request:ok") return oToast("支付失败")
                    callback(true)
                }
            );
        }
    },
    getTmapLocation(call) {
        const _this = this;
        wx.ready(function () {
            wx.getLocation({
                type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    var speed = res.speed; // 速度，以米/每秒计
                    var accuracy = res.accuracy; // 位置精度
                    call({
                        lat: latitude,
                        lng: longitude,
                    })
                }
            });
        })
    },
    scan(type, success) {
        wx.ready(function () {
            oHideLoading()
            wx.scanQRCode({
                needResult: type, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    success(res)
                },
                error: function (err) {
                    dlctipbox.show(err);
                }
            });
        });
    },
    close() {
        WeixinJSBridge.call('closeWindow')
    }
}