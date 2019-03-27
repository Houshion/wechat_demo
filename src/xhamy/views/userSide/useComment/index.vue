useComment<template>
  <div id="useComment" class="pd-15">
    <div class="boxShadow pd-15 tal radius5">{{comments}}</div>
    <o-button class="wd-90 mg-t-50" @btnClick="open">开启设备</o-button>
  </div>
</template>

<script>
export default {
  name: "useComment",
  data() {
    return {
      comments:
        "这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明这是说明"
    };
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    open() {
      const _this = this;
      this.$showLoading()
      this.axios.post("/wxsite/device/postpaid",
        { macno: this.tool.macno }
      ).then(res => {
        if (res.code == 1) {
          _this.$router.replace({ name: "chooseType" })
        } else {
          _this.$toast(res.msg)
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
