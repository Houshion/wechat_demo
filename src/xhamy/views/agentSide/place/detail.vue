<template>
  <div id="placeDetail" class="pd-15">
    <div class="boxShadow radius10 tal pd-15">
      <van-cell title="场地名称" :border="false" :value="placeDetail.name"/>
      <van-cell title="场地地址" :border="false" :value="placeDetail.address"/>
      <van-cell title="合同编号" :border="false" :value="placeDetail.macno"/>
      <van-cell title="场地设备数量" :border="false" :value="placeDetail.device_number"/>
      <van-cell title="场地金额" :border="false" :value="placeDetail.device_turnover"/>
      <van-cell title="创建时间" :border="false" :value="placeDetail.ctime"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "placeDetail",
  data() {
    return {
      placeDetail: Object,
      placeDetail: {
        "site_id": "4",
        "name": "皇冠酒店",
        "address": "中山市小榄镇民安路皇冠酒店",
        "macno": "666666",
        "device_turnover": "0.00",
        "device_id": "1641",
        "turnover": "0.00",
        "ctime": "2019-04-03 15:25:20",
        "device_number": "1"
      },
      form: {
        api_name: "site_device_info",
        token: this.base.getItem("agentToken"),
        device_id: this.$route.query.id
      }
    };
  },

  components: {},

  created() {
    const _this = this;
    // console.log(this.$route.query.id)
    // _this.placeDetail.no = 1;
    this.axios.post('/wxsite/agent/api', this.form).then(res => {
      _this.hideLoading();
      if (res.code != 1) return _this.toast(res.msg)
      _this.placeDetail = res.data
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
