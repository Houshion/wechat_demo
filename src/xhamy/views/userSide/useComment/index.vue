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
    _this.base.socket("connectinfo_beck_bjxhamy_" + _this.tool.userMsg.user_id, res => {
      _this.$hideLoading()
      let data = JSON.parse(res.data.data)
      console.log(data)
      if (res.code == 1 && data.status == 1) {
        _this.$xToast("success", "订单创建成功!", () => {
          setTimeout(() => {
            _this.$router.replace({
              name: "chooseType",
              query: {
                order_id: data.order_id,
                start: 1
              }
            })
          }, 1500);
        })
      } else {
        _this.$toast(data.message)
      }
    })
  },
  methods: {
    open() {
      const _this = this;
      this.axios.post("/wxsite/device/postpaid",
        { macno: this.tool.macno }
      ).then(res => {
        if (res.code != 1) {
          _this.$hideLoading()
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
