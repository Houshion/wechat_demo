<template>
  <div id="error" class="pd-15">
    <div
      class="boxShadow radius10 tal pd-15 mg-b-15"
      v-for="(item,index) in errorData"
      :key="index"
    >
      <div class="fontb font18">{{item.content}}</div>
      <div class="flex flexStart mg-tb-10">
        <div class="title c999 wd-30">设备编号</div>
        <div class="wd-70">{{item.macno}}</div>
      </div>
      <div class="flex flexStart">
        <div class="title c999 wd-30">设备地址</div>
        <div class="wd-70">{{item.address}}</div>
      </div>
    </div>
    <no-data v-if="errorData.length<=0"></no-data>
  </div>
</template>

<script>
export default {
  name: "error",
  data() {
    return {
      errorData: Array,
      form: {
        api_name: "fault_list",
        token: this.base.getItem("agentToken")
      }
    };
  },

  created() {
    const _this = this;
    this.axios.post('/Wxsite/Agent/api', this.form).then(res => {
      _this.hideLoading();
      if (res.code != 1) return _this.toast(res.msg)
      _this.errorData = res.data.list
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
