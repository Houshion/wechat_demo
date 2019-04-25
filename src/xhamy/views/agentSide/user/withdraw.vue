<template>
  <div id="withDraw" class="pd-15">
    <o-withdraw :listData="listData" @submit="submit"></o-withdraw>
  </div>
</template>

<script>
// import oWithdraw from "@/components/oceans/oWithdraw";
export default {
  name: "withDraw",
  data() {
    return {
      form: Object,
      listData: Array,
    };
  },

  // components: { oWithdraw },

  created() {
    const _this = this;
    this.listData = [
      { title: "提现金额", val: null, isNull: false, type: "text", key: "this.value=this.value.replace(/[^0-9]/g,'')" },
      { title: "收款人姓名", val: null, isNull: false },
      { title: "身份证号", val: null, isNull: false, type: "text", key: "this.value=this.value.replace(/[^0-9]/g,'')" },
      { title: "银行名称", val: null, isNull: false },
      { title: "银行卡号", val: null, isNull: false, type: "text", key: "this.value=this.value.replace(/[^0-9]/g,'')" },
      { title: "开户支行名称", val: null, isNull: false }
    ]
  },

  mounted() {
    const _this = this;
  },
  methods: {
    submit(value) {
      const _this = this;
      this.form = {
        api_name: "take_money_submit",
        money: value[0].val,
        name: value[1].val,
        id_card: value[2].val,
        bank_name: value[3].val,
        bank_card: value[4].val,
        branch_name: value[5].val,
        token: this.base.getItem("agentToken"),
      }
      this.axios.post('/Wxsite/Agent/api', this.form).then(res => {
        _this.hideLoading();
        _this.toast(res.msg)
        if (res.code != 1) return false;
        setTimeout(() => {
          _this.$router.replace({
            name: 'agent/user'
          })
        }, 1500);
      })
    }
  }
};
</script>
<style lang='less' scoped>
</style>
