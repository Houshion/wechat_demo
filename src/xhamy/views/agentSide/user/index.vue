<template>
  <div id="user" class="pd-15">
    <div class="boxShadow pd-25 mg-b-15 radius10">
      <div class="c999">总余额</div>
      <div class="mg-tb-20">
        ￥
        <span class="font32 fontb">{{money.balance|toFixed(2)}}</span>
      </div>
      <div class="button wd-30 mg-auto">
        <o-button to="user/withdraw">提现</o-button>
      </div>
    </div>
    <div class="c999 font14 tal mg-b-15">钱包明细</div>
    <div class="detail">
      <o-order-list
        ref="oOrderList"
        :orderList="money.cash_list"
        @onLoad="onLoad"
        v-if="money.cash_list.length>0"
      ></o-order-list>
      <no-data v-else></no-data>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      money: {
        balance: "0",
        cash_list: [
          {
            "money": "1.00",
            "retime": "2018.09.19 20:25"
          }
        ]
      },
      form: {
        api_name: "take_money",
        page: 1,
        pagesize: 20,
        token: this.base.getItem("agentToken")
      }
    };
  },


  created() {
    const _this = this;
    this.init(1)
  },

  mounted() {
    const _this = this;
  },
  methods: {
    init(page) {
      const _this = this;
      this.form.page = page
      this.axios.post('/Wxsite/Agent/api', this.form).then(res => {
        _this.hideLoading();
        if (res.code != 1) return _this.toast(res.msg)
        // _this.money = res.data
        // _this.data.dataList = [..._this.data.dataList, ...res.data.cash_list]
        if (res.data.cash_list.length < 20) {
          _this.$refs.oOrderList.finished = true
        }
      })
    },

    onLoad() {
      const _this = this;
      this.form.page++
      setTimeout(() => {
        _this.init(_this.form.page)
        _this.$refs.oOrderList.loading = false
      }, 1000);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
