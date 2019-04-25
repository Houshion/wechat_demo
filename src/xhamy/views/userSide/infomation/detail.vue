<template>
  <div id="infomationDetail">
    <div class="pd-15 tal" v-html="content">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: "infomationDetail",
  data() {
    return {
      form: {
        api_name: "messageInfo",
        message_id: this.$route.query.id
      },
      content: '',
    };
  },

  components: {},

  created() {
    const _this = this;
    this.axios.post("/Wxsite/User/api", this.form).then(res => {
      _this.hideLoading();
      if (res.code != 1) return _this.toast(res.msg)
      _this.content = res.data.content
    })
  },

  mounted() {
    const _this = this;
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
