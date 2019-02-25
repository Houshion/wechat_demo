<template>
  <div id="coupon">
    <o-coupon :list="couponList">
      <img src="@/xhamy/img/coupon_icon.png" class="couponIcon">
    </o-coupon>
  </div>
</template>

<script>
// import oCoupon from "@/components/Oceans/oCoupon";
export default {
  name: "coupon",
  data() {
    return {
      couponList: [
        { id: 1, time: "2019-03-01", price: 2, state: 1 },
        { id: 2, time: "2019-03-01", price: 3, state: 0 },
        { id: 3, time: "2019-03-01", price: 4, state: 0 }
      ]
    };
  },

  components: {
    oCoupon
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
