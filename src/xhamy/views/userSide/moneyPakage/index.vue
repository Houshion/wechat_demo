<template>
  <div id="moneyPakage" class="pd-15">
    <div class="boxShadow pd-25 mg-b-15 radius10">
      <div class="c999">余额</div>
      <div class="mg-tb-20">
        ￥
        <span class="font32 fontb">{{money}}</span>
      </div>
      <div class="button wd-30 mg-auto">
        <o-button to="recharge">充值</o-button>
      </div>
    </div>
    <div class="c999 font14 tal mg-b-15">余额明细</div>
    <div class="detail">
      <money-detail :moneyDetail="data"></money-detail>
    </div>
  </div>
</template>

<script>
import moneyDetail from "./components";
export default {
  name: "moneyPakage",
  data() {
    return {
      money: 0,
      data: []
    };
  },

  components: { moneyDetail },

  created() {
    const _this = this;

    if (!this.tool.userMsg) {
      this.tool.xhamy.getUser();
    }
    this.money = this.tool.userMsg.money

    this.axios.post("/wxsite/user/api", { api_name: "consumptionLog" }).then(res => {
      _this.hideLoading();
      if (res.code != 1) return _this.toast(res.msg)
      _this.data = res.data.list
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