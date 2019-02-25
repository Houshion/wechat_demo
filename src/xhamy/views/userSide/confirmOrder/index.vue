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
    <div class="coupon boxShadow radius5 mg-t-15 tal flex">
      <van-cell title="优惠券" is-link>
        <div slot="icon" class="img box">
          <img src="@/xhamy/img/i_coupon.png" class="wd-100 mg-r-10">
        </div>
      </van-cell>
    </div>
    <div class="payWay boxShadow radius5 mg-t-15 tal">
      <o-pay-way></o-pay-way>
    </div>
    <o-button class="wd-90 mg-auto">支付</o-button>
  </div>
</template>

<script>
import oPayWay from "@/components/oceans/oPayWay";
export default {
  name: "confirmOrder",
  data() {
    return {
      orderMsg: {
        name: "套餐一",
        rule: "15元30分钟",
        time: 30,
        money: 15
      },
      payWay: [
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
      radio: 0
    };
  },

  components: {
    oPayWay
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {}
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
