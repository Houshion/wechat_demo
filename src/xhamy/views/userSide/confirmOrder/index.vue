<template>
  <div id="confirmOrder" class="pd-10">
    <div class="boxShadow radius5 pd-15 tal tcMsg" v-if="type==1">
      <div class="title flex flexStart">
        <img src="@/xhamy/img/i_taocan.png" class="w20">
        <div class="fontb mg-l-10">已选择套餐</div>
      </div>
      <div class="c999 mg-l-30 pd-tb-15">{{orderMsg.name+" （"+orderMsg.rule+"）"}}</div>
      <div class="tac font24">
        ￥
        <span class="price">{{orderMsg.money | toFixed(2)}}</span>
      </div>
    </div>
    <div class="boxShadow radius5 pd-15 tal tcMsg" v-else>
      <div class="title flex flexStart">
        <img src="@/xhamy/img/i_taocan.png" class="w20">
        <div class="fontb mg-l-10">已使用{{time|countMin}}分钟</div>
      </div>
    </div>
    <div class="couponCell boxShadow radius5 mg-t-15 tal flex">
      <van-cell title="优惠券" is-link to="coupon?type=1">
        <div v-if="couponMsg">-{{couponMsg.price}}</div>
        <div slot="icon" class="img box">
          <img src="@/xhamy/img/i_coupon.png" class="wd-100 mg-r-10">
        </div>
      </van-cell>
    </div>
    <div class="payWay boxShadow radius5 mg-t-15 tal">
      <o-pay-way :price="total" :payWay="payWay" @getPayWay="getVal"></o-pay-way>
    </div>
    <o-button class="wd-90 mg-t-50" @btnClick="payNow">支付</o-button>
  </div>
</template>

<script>
import { payWay, a } from "./script";
export default {
  name: "confirmOrder",
  data() {
    return {
      orderMsg: this.tool.xhamy.orderTc, // 订单信息
      // 支付方式
      payWay: payWay,
      radio: 0,
      // 接口信息
      form: {
        // api_name: "pay_order",
        // macno: this.tool.macno, //设备编号
        // item_id: this.$route.query.id, // 套餐id
        coupon_id: this.base.getItem("couponMsg") ? this.base.getItem("couponMsg").id : '', // 优惠券id
        pay_type: 2, //支付方式 1：余额 2：微信支付
      },
      // 先支付接口地址
      payFirst: {
        url: '/Wxsite/Device/api',
      },
      // 后支付接口地址
      payAfter: {
        url: '/wxsite/auth/pay_order2',
      },
      type: this.$route.query.type, // 确认订单类型，1：先付款，2：后付款
      time: this.$route.query.time ? this.$route.query.time : 0, //使用时长，单位秒
      couponMsg: null // 选中的优惠券信息
    };
  },

  created() {
    const _this = this;
    this.tool.xhamy.getUser()
    if (this.$route.query.order_id) {
      this.tool.xhamy.getOrder(this.$route.query.order_id, res => {
        this.orderMsg = res;
        this.time = res.useSecond
      })
    }
    if (this.base.getItem("couponMsg")) {
      this.couponMsg = JSON.parse(this.base.getItem("couponMsg"))
    }
  },

  mounted() {
    const _this = this;
    // 此处判断设备类型，type==1为先支付类设备，需连接websocet获取数据
    this.socket()
    // this.$route.query.type == 1 ? this.socket() : '';
  },
  computed: {
    total() {
      let total;
      // if (this.type == 1) {
      total = this.orderMsg.money - (this.couponMsg ? this.couponMsg.price : 0)
      if (total < 0) {
        total = 0
      }
      // } else {
      //   console.log(this.orderMsg)
      //   total = this.orderMsg.money - (this.couponMsg ? this.couponMsg.price : 0)
      //   if (total < 0) {
      //     total = 0
      //   }
      // }
      return total
    }
  },
  methods: {
    socket() {
      const _this = this;
      _this.base.socket("connectinfo_beck_bjxhamy_" + _this.tool.userMsg.user_id, res => {
        console.log(res);
        let data
        if (this.type == 1) {
          data = JSON.parse(res.data.data)
        } else {
          data = JSON.parse(res.data)
        }
        console.log(data)
        // _this.$toast(data.message)
        _this.$hideLoading()
        if (res.code == 1 && data.status == 1) {
          if (_this.form.pay_type == 2) {
            _this.payOrder(data.order_id)
          } else {
            _this.tool.successPay() // 完成支付后清除订单信息及优惠券信息
            _this.$toast(data.message)
            setTimeout(() => {
              _this.$router.replace({
                name: "using",
                query: {
                  order_id: data.order_id
                }
              })
            }, 1500);
          }
        }
      })
    },
    payNow() {
      const _this = this;
      let url;
      if (this.type == 1) {
        url = this.payFirst.url;
        this.form.api_name = "pay_order";
        this.form.macno = this.tool.macno;
        this.form.item_id = this.id;
      } else {
        url = this.payAfter.url
      }
      this.$showLoading()
      this.axios.post(url, this.form).then(res => {
        if (res.code == 1) {
          if (_this.form.pay_type == 1 || _this.total == 0) {
            // _this.$xToast("success", res.msg)
            _this.tool.successPay() // 完成支付后清除订单信息及优惠券信息
          } else {
            if (this.type == 2) {
              _this.wechat.callpay(res.data.params, res => {
                if (res) {
                  _this.tool.successPay() // 完成支付后清除订单信息及优惠券信息
                  _this.wechat.close()
                } else {
                  _this.$toast("支付失败")
                }
              })
            }
          }
          // setTimeout(() => {
          //   _this.wechat.close()
          // }, 2000);
        } else {
          _this.$toast(res.msg)
        }
      });
    },
    getVal(index) {
      const _this = this;
      switch (index) {
        case 0:
          _this.form.pay_type = 2;
          // _this.payWay = 2
          break;
        case 1:
          _this.form.pay_type = 1;
          // _this.payWay = 1
          break;
        default:
          break;
      }
    },
    payOrder(orderId) {
      const _this = this;
      this.axios.post("/wxsite/auth/pay_order", { order_id: orderId }).then(res => {
        _this.$hideLoading();
        if (res.code == 1) {
          _this.wechat.callpay(res.data.params, res => {
            if (res) {
              _this.tool.successPay() // 完成支付后清除订单信息及优惠券信息
              _this.$router.replace({
                name: "using",
                query: {
                  order_id: orderId
                }
              })
            } else {
              _this.$toast("支付失败")
            }
          })
        } else {
          _this.$toast(res.msg)
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
