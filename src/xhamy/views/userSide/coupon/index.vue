<template>
  <div id="coupon">
    <o-coupon :list="couponList" @getCoupon="getCoupon">
      <img src="@/xhamy/img/coupon_icon.png" class="couponIcon">
    </o-coupon>
    <no-data v-if="couponList.length<=0"></no-data>
  </div>
</template>
<script>
export default {
  name: "coupon",
  data() {
    return {
      couponList: [
        // { id: 1, time: "2019-03-01", price: 2, state: 1 },
        // { id: 2, time: "2019-03-01", price: 3, state: 0 },
        // { id: 3, time: "2019-03-01", price: 4, state: 0 }
      ]
    };
  },

  created() {
    const _this = this;
    this.axios.post("/Wxsite/Device/api", {
      api_name: 'get_user_coupon',
      page: 1,
      pagesize: 20
    }).then(res => {
      _this.hideLoading()
      res.data.forEach(item => {
        _this.couponList.push({
          id: item.id,
          time: _this.base.timeStr(item.etime, "Y-m-d"),
          price: item.coupon_money,
          state: item.status_name == "未使用" ? 0 : 1
        })
      });
    })
  },

  mounted() {
    const _this = this;
  },

  methods: {
    getCoupon(val) {
      if (this.$route.query.type) {
        let couponJson = JSON.stringify(this.couponList[val]);

        if (this.tool.couponMsg && couponJson === this.base.getItem("couponMsg")) {
          this.base.moveItem("couponMsg");
        } else {
          this.base.setItem('couponMsg', couponJson);
        }

        this.$router.go(-1)
      }
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
