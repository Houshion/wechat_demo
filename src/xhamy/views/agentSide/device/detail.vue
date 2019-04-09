<template>
  <div id="deviceDetail" class="pd-15">
    <div class="boxShadow radius10 pd-15">
      {{deviceDetail.title}}
      <span>（{{deviceDetail.status==1?"空闲":deviceDetail.status==(2||3||5)?"使用中":deviceDetail.status==4?"故障":"离线"}}）</span>
    </div>
    <div class="boxShadow radius10 pd-lr-35 pd-tb-15 flex flexWrap flexBetween mg-t-15 tal">
      <div class="wd-50 pd-tb-15">
        <div class="title c999 mg-b-10">订单编号</div>
        <div class="fontb">{{deviceDetail.macno}}</div>
      </div>
      <div class="wd-50 pd-tb-15">
        <div class="title c999 mg-b-10">区域名称</div>
        <div class="fontb">{{deviceDetail.area_name}}</div>
      </div>
      <div class="wd-100 pd-tb-15">
        <div class="title c999 mg-b-10">添加时间</div>
        <div class="fontb">{{deviceDetail.ctime}}</div>
      </div>
      <div class="wd-100 pd-tb-15">
        <div class="title c999 mg-b-10">设备地址</div>
        <div class="fontb">{{deviceDetail.address}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deviceDetail",
  data() {
    return {
      form: {
        api_name: "device_detail",
        macno: this.$route.query.macno,
        token: this.base.getItem("agentToken")
      },
      deviceDetail: Object
    };
  },

  components: {},

  created() {
    const _this = this;
    this.axios.post("/wxsite/agent/api", this.form).then(res => {
      _this.$hideLoading()
      if (res.code != 1) return _this.$toast(res.msg)
      _this.deviceDetail = res.data
    })
  },

  mounted() {
    const _this = this;
  },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>
