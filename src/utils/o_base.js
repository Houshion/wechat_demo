import axios from "./axios";
import wx from "weixin-js-sdk";
import { oToast } from '@/components/oceans/oToast/index.js'
// import "./jsSHA.js";
export default {
  /******************************* 跳转 **************************/
  goTo(to, query) {
    const _this = this;
    _this.$router.push({
      name: to,
      query: query
    })
  },
  /******************************* 微信信息 **************************/
  getWx(callback, jsApiList) {
    const _this = this;
    axios.post("/Wxsite/Device/api", {
      api_name: "get_ticket",
      token: window.localStorage.getItem("token"),
      url: location.href
    }).then(res => {
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
          console.log(ticket)
          console.log(res.data.ticket)
          // config信息
          appId = "wx6a088195d7884586";
          nonceStr = noncestr;
          signature = ticket
        } else {
          console.log(res.data.nonceStr)
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
            'onMenuShareTimeline',//（即将废弃）
            'onMenuShareAppMessage',//（即将废弃）
            'onMenuShareQQ',//（即将废弃）
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
          WeixinJSBridge.log(payBack.err_msg);
          callback(payBack.err_msg)
        }
      );
    }
  },
  getTmapLocation(call) {
    const _this = this;
    wx.ready(function () {
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
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
      wx.scanQRCode({
        needResult: type, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          success()
          // alert(JSON.stringify(res));
          // _this.$router.push({
          //   name: "addPackage",
          //   query: {
          //     device_number: res.resultStr,
          //     // device_number: "1000100010001612",
          //     type: 1
          //   }
          // });
        },
        error: function (err) {
          dlctipbox.show(err);
        }
      });
    });
  },
  /******************************* 判断类 **************************/
  // 验证手机
  isPhone(phone) {
    if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(phone)) {
      return true;
    } else {
      return false;
    }
  },
  // 验证身份证
  getIdNum(ID) {
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!regIdNo.test(ID)) {
      return false;
    } else {
      return true
    }
  },
  // 验证车牌号
  getCarNum(num) {
    if (vehicleNumber.length == 7) {
      var express = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
      if (express.test(vehicleNumber)) {
        return false;
      } else {
        return true
      }
    } else {
      return false
    }
  },

  // 判断是否为空
  isNull(value) {
    if ($.trim(value).length) {
      return false;
    } else {
      return true;
    }
  },
  // 判断是否为数字
  isNum(num) {
    if (isNaN(num)) {
      return true;
    } else {
      return false;
    }
  },
  // 判断邮箱是否正确
  isEmail(email) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var isok = reg.test(email);
    if (isok) {
      return true;
    } else {
      return false;
    }
  },
  /****************************** 缓存类 ******************************/
  // 设置本地缓存
  setItem(key, val) {
    return window.localStorage.setItem(key, val)
  },
  // 获取本地缓存
  getItem(key) {
    return window.localStorage.getItem(key);
  },
  // 删除本地缓存
  moveItem(key) {
    localStorage.removeItem(key);
  },

  /**
   * @param name cookie名称
   * @param value cookie值
   * @param iDay cookie的时间
   */
  // 设置cookie
  setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
  },
  // 获取cookie
  getCookie(name) {
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');
      if (arr2[0] == name) {
        return arr2[1];
      }
    }
    return '';
  },
  // 删除cookie
  removeCookie(name) {
    setCookie(name, 1, -1);
  },

  /****************************** 格式化时间 ******************************/
  timeStr(time, ff) {
    if (Number(time).toString().length == 10) {
      time = Number(time + "000")
    }
    time = new Date(time);
    var year = time.getFullYear();
    var month =
      time.getMonth() + 1 < 10 ?
        "0" + (time.getMonth() + 1) :
        time.getMonth() + 1;
    var date = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    var minute =
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var second =
      time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    if (ff == "Y-m-d") {
      return year + "-" + month + "-" + date;
    } else if (ff == "Y-m-d H:i:s") {
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    } else if (ff == "Y-m-d H:i") {
      return year + "-" + month + "-" + date + " " + hour + ":" + minute;
    } else if (ff == "Y.m.d") {
      return year + "." + month + "." + date;
    } else if (ff == "Y.m.d H:i:s") {
      return (
        year +
        "." +
        month +
        "." +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    } else if (ff == "Y.m.d H:i") {
      return year + "." + month + "." + date + " " + hour + ":" + minute;
    }
  },

  /****************************** webSocket ******************************/
  socket(data, cb) {
    if ("WebSocket" in window) {
      // var ws = new WebSocket("ws://120.77.72.190:9999");
      var ws = new WebSocket("ws://120.77.72.190:8082");
      ws.onopen = function () {
        ws.send(data);
      };
      ws.onmessage = function (res) {
        cb({ code: 1, data: res.data });
        ws.close() // 获取到数据后，关闭socket
      };
      ws.onclose = function (close) {
        // alert(JSON.stringify(close));
        console.log(JSON.stringify(close));
        // cb({ code: 3, msg: "连接断开", data: close });
      };
      ws.error = function (err) {
        // alert(JSON.stringify(err));
        console.log(JSON.stringify(err));
        // cb({ code: 4, msg: "连接失败", data: err });
      };
    } else {
      console.log(JSON.stringify(err));
      // cb({ code: 2, msg: "当前浏览器不支持WebSocket!" });
    }
  },
}
