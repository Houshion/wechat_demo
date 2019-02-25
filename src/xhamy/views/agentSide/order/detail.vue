<template>
  <div id="orderDetail" class="pd-15">
    <div class="boxShadow radius10 tal pd-15">
      <van-cell title="订单编号" :border="false" :value="orderDetail.no"/>
      <van-cell title="设备编号" :border="false" :value="orderDetail.no"/>
      <van-cell title="设备名称" :border="false" :value="orderDetail.no"/>
      <van-cell title="使用套餐" :border="false" :value="orderDetail.no"/>
      <van-cell title="使用优惠券" :border="false" :value="orderDetail.no"/>
      <van-cell title="使用时段" value="2018-02-20 00:00~2018-03-20 00:00" :border="false">
        <div>2018-02-20 00:00~
          <br>2018-03-20 00:00
        </div>
      </van-cell>
      <van-cell title="用户昵称" :border="false" :value="orderDetail.no"/>
      <van-cell title="应付金额" :border="false" :value="orderDetail.no"/>
      <van-cell title="实付金额" :border="false" :value="orderDetail.no"/>
      <van-cell title="支付方式" :border="false" :value="orderDetail.no"/>
      <van-cell title="状态" :border="false" :value="orderDetail.no"/>
      <van-cell title="创建时间" :border="false" :value="orderDetail.no"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderDetail",
  data() {
    return {
      orderDetail: Object
    };
  },

  components: {},

  created() {
    const _this = this;
    _this.orderDetail.no = 1;
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
