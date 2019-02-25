<template>
  <div id="placeDetail" class="pd-15">
    <div class="boxShadow radius10 tal pd-15">
      <van-cell title="场地名称" :border="false" :value="placeDetail.no"/>
      <van-cell title="场地地址" :border="false" :value="placeDetail.no"/>
      <van-cell title="合同编号" :border="false" :value="placeDetail.no"/>
      <van-cell title="场地设备数量" :border="false" :value="placeDetail.no"/>
      <van-cell title="场地金额" :border="false" :value="placeDetail.no"/>
      <van-cell title="创建时间" :border="false" :value="placeDetail.no"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "placeDetail",
  data() {
    return {
      placeDetail: Object
    };
  },

  components: {},

  created() {
    const _this = this;
    _this.placeDetail.no = 1;
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
