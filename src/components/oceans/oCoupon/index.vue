<template>
  <div id="oCoupon">
    <div
      class="coupon"
      :class="item.state==0 ?'':'coupon-diabled'"
      v-for="(item,index) in list"
      :key="item.id"
      @click="select(index)"
    >
      <div class="coupon-left">
        <div class="coupon-inner">
          <div class="coupon-money">
            <span>¥</span>
            <span class="sum">{{item.price|toFixed(2)}}</span>
          </div>
          <div class="coupon-condition">
            <p>有效期：</p>
            <p class="ti1">{{item.time}}</p>
          </div>
        </div>
      </div>
      <div class="coupon-right">
        <div class="coupon-inner">
          <div class="coupon-time">
            <slot></slot>
            <div class="state">{{item.state==0?"未使用":"已使用"}}</div>
            <div class="select" v-if="item.id === selectId">
              <img src="../../../xhamy/img/couponSelect.png" alt="">
            </div>
          </div>
          <i class="coupon-circle top"></i>
          <i class="coupon-circle bottom"></i>
        </div>
      </div>
      <div class="coupon-light"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oCoupon",
  props: {
    list: Array
  },
  data() {
    const _this = this
    return {
      selectId: this.$route.query.type ? this.tool.couponMsg ? this.tool.couponMsg.id : null : null
    };
  },

  components: {},

  created() {
    const _this = this;
    console.log(_this.selectId);

  },

  mounted() {
    const _this = this;
  },
  methods: {
    select(id) {
      this.$emit("getCoupon", id)
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.css";
</style>
