useComment<template>
  <div id="useComment" class="pd-15">
    <div class="boxShadow pd-15 tal">{{comments}}</div>
    <o-button class="wd-90 mg-auto">开启设备</o-button>
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
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
