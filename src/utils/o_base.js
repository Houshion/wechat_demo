import axios from "./axios";
import wx from "weixin-js-sdk";
import {
  oToast
} from '@/components/oceans/oToast/index.js'
// import "./jsSHA.js";
var ws;
export default {
  /******************************* 跳转 **************************/
  goTo(to, query) {
    const _this = this;
    _this.$router.push({
      name: to,
      query: query
    })
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
   * @param iDay cookie的时间，单位（天）
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
  /**
   * 
   * @param {Number} time 传入的时间戳
   * @param {String} ff 格式，例：“Y-m-d H:i:s”
   */
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
  /**
   * 
   * @param {any} data 发送的数据
   * @param {function} cb 回调函数
   */
  socket(data, cb) {
    if ("WebSocket" in window) {
      let interval;
      ws = new WebSocket("ws://120.77.72.190:9999");
      // var ws = new WebSocket("ws://120.77.72.190:8082");
      ws.onopen = function () {
        // 向机器云发送内容
        ws.send(data);
        // 每隔30秒轮询一次，反复发送空指令以防断开socket
        interval = setInterval(() => {
          console.log("relink");
          ws.send("connectinfo_999999");
        }, 30000);
      };
      ws.onmessage = function (res) {
        cb({
          code: 1,
          data: res
        });
        clearInterval(interval)
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
  socketClose(call) {
    ws.close();

    ws.onclose = function (close) {
      console.log("连接断开");
      call(close)
      // cb({ code: 3, msg: "连接断开", data: close });
    };
  },
  /****************************** update ******************************/
  /**
   * 
   * @param {Object} data 传入的参数，url为请求路径，param为请求参数
   * @param {function} call 回调函数
   */
  update(data, e, call) {
    let file = e.file;
    // 上传照片
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (evt) {
      //console.log(evt.target)
      // _this.imgs = evt.target.result;
      // _this.show = false;
    };

    // 添加请求头
    let config = {
      "Content-Type": "multipart/form-data"
    };

    axios
      .post(
        data.url,
        data.param,
        config
      )
      .then(res => {
        call(res)
      });
  },

  getUrl(name, explode, url) {
    var param = window.location.search.substr(1);
    if (url) {
      if (explode) {
        param = url.substr(url.indexOf(explode) + 1);
      } else {
        param = url.substr(url.indexOf('?') + 1);
      }
    } else {
      if (explode) {
        param = window.location.href.substr(window.location.href.indexOf(explode) + 1);
      }
    }
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = param.match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },

  getUrlParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
    return null;
  },

  enter() {
    console.log("欧少提示：你点击了enter")
  }
}