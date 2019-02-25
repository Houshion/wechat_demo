<template>
  <div id="aboutUs" class="pd-10">
    <div class="radius5">
      <img src="@/xhamy/img/banner.png" class="wd-100">
    </div>
    <div class="boxShadow radius5 pd-10 mg-t-10 tal font14" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      content: "这是我们的简介"
    };
  },

  components: {},

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
