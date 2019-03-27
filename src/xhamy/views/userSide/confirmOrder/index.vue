<template>
  <div id="confirmOrder" class="pd-10">
    <div class="boxShadow radius5 pd-15 tal tcMsg">
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
export default {
  name: "confirmOrder",
  data() {
    return {
      orderMsg: this.tool.orderTc,
      payWay: {
        way: [
          {
            name: "微信支付",
            icon: require("@/xhamy/img/i_wxpay.png"),
            status: true
          },
          {
            name: "余额支付",
            icon: require("@/xhamy/img/i_yuepay.png"),
            status: false
          }
        ],
        icon: {
          normal: require("@/xhamy/img/unpick.png"),
          active: require("@/xhamy/img/pick.png")
        },
      },

      radio: 0,
      form: {
        api_name: "pay_order",
        macno: this.tool.macno, //设备编号
        item_id: this.$route.query.id, // 套餐id
        coupon_id: 0, // 优惠券id
        pay_type: 2, //支付方式 1：余额 2：微信支付
      },
      couponMsg: null
    };
  },

  created() {
    const _this = this;
    console.log(this.$route)
    if (this.base.getItem("couponMsg")) {
      this.couponMsg = JSON.parse(this.base.getItem("couponMsg"))
      this.form.coupon_id = this.couponMsg.id
    }
  },

  mounted() {
    const _this = this;
    _this.base.socket("connectinfo_beck_bjxhamy_" + _this.tool.userMsg.user_id, res => {
      _this.$hideLoading()
      _this.$toast(res.msg)
      if (res.code == 1) {
        
      } else {
        
      }
    })
  },
  computed: {
    total() {
      let total = this.orderMsg.money - (this.couponMsg ? this.couponMsg.price : 0)
      if (total < 0) {
        total = 0
      }
      return total
    }
  },
  methods: {
    payNow() {
      const _this = this;
      this.axios.post("/Wxsite/Device/api", this.form).then(res => {
        if (res.code == 1) {
          _this.$xToast("success", res.msg);
          setTimeout(() => {
            _this.$router.replace({ name: "using" })
          }, 1500);
        } else {
          _this.$toast(res.msg)
        }
      });
    },
    getVal(index) {
      const _this = this;
      switch (index) {
        case 0:
          _this.form.pay_type = 2
          break;
        case 1:
          _this.form.pay_type = 1
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
