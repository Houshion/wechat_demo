<template>
  <div id="user" class="pd-15">
    <div class="boxShadow pd-25 mg-b-15 radius10">
      <div class="c999">总余额</div>
      <div class="mg-tb-20">
        ￥
        <span class="font32 fontb">100.00</span>
      </div>
      <div class="button wd-30 mg-auto">
        <o-button to="user/withdraw">提现</o-button>
      </div>
    </div>
    <div class="c999 font14 tal mg-b-15">钱包明细</div>
    <div class="detail">
      <money-detail :moneyDetail="data"></money-detail>
    </div>
  </div>
</template>

<script>
import moneyDetail from "../../userSide/moneyPakage/components/";
export default {
  name: "user",
  data() {
    return {
      data: [
        {
          id: 1,
          name: "提现",
          time: "2019-02-20 10:00",
          state: "1",
          money: 10
        },
        {
          id: 2,
          name: "提现",
          time: "2019-02-20 10:00",
          state: "1",
          money: 10
        },
        {
          id: 3,
          name: "提现",
          time: "2019-02-20 10:00",
          state: "1",
          money: 10
        }
      ]
    };
  },

  components: { moneyDetail },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  }
};
</script>
<style lang='less' scoped>
</style>
