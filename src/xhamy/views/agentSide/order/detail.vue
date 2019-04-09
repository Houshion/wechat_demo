<template>
  <div id="orderDetail" class="pd-15">
    <div class="boxShadow radius10 tal pd-15">
      <van-cell title="订单编号" :border="false" :value="orderDetail.order_no"/>
      <van-cell title="设备编号" :border="false" :value="orderDetail.macno"/>
      <van-cell title="设备名称" :border="false" :value="orderDetail.device_name"/>
      <van-cell title="使用套餐" :border="false" :value="orderDetail.item_name"/>
      <van-cell title="使用优惠券" :border="false" :value="orderDetail.coupon_name"/>
      <van-cell title="使用时段" value="2018-02-20 00:00~2018-03-20 00:00" :border="false">
        <div>
          {{orderDetail.start_time}}~
          <br>
          {{orderDetail.end_time}}
        </div>
      </van-cell>
      <van-cell title="用户昵称" :border="false" :value="orderDetail.user_name"/>
      <van-cell title="应付金额" :border="false" :value="orderDetail.real_money"/>
      <van-cell title="实付金额" :border="false" :value="orderDetail.should_money"/>
      <van-cell title="支付方式" :border="false" :value="orderDetail.paytype"/>
      <van-cell title="状态" :border="false" :value="orderDetail.status_"/>
      <van-cell title="创建时间" :border="false" :value="orderDetail.ctime"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderDetail",
  data() {
    return {
      orderDetail: Object,
      form: {
        api_name: "order_detail",
        order_id: this.$route.query.order_id,
        token: this.base.getItem("agentToken")
      },
    };
  },

  components: {},

  created() {
    const _this = this;
    _this.orderDetail.no = 1;
    this.axios.post("/wxsite/agent/api", this.form).then(res => {
      _this.$hideLoading()
      if (res.code != 1) return _this.$toast(res.msg)
      _this.orderDetail = res.data
    })
  },

  mounted() {
    const _this = this;
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.van-cell {
  padding: 0;
}
</style>
