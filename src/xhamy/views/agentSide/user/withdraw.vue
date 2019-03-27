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
      listData: [
        { title: "提现金额", val: null, type: "number" },
        { title: "收款人姓名", val: null },
        { title: "身份证号", val: null, type: "number" },
        { title: "银行名称", val: null },
        { title: "银行卡号", val: null, type: "number" },
        { title: "开户支行名称", val: null }
      ]
    };
  },

  // components: { oWithdraw },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    submit(val) {
      console.log(JSON.stringify(val));
    }
  }
};
</script>
<style lang='less' scoped>
</style>
