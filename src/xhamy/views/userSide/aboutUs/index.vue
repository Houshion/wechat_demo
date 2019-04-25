<template>
  <div id="aboutUs" class="pd-10">
    <!-- <div class="radius5">
      <img src="@/xhamy/img/banner.png" class="wd-100">
    </div>-->
    <div class="content boxShadow radius5 pd-10 mg-t-10 tal font14" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "aboutUs",
  data() {
    return {
      content: ""
    };
  },

  components: {},

  created() {
    const _this = this;
    this.axios.post("/wxsite/user/api", { api_name: "about_us" }).then(res => {
      _this.hideLoading();
      if (res.code != 1) return _this.toast(res.msg)
      _this.content = res.data
    })
  },

  mounted() {
    const _this = this;
  }
};
</script>
<style lang='less'>
@import "./style.less";
</style>
