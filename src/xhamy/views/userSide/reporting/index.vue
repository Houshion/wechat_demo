<template>
  <div id="reporting" class="pd-15">
    <div class="scanCode boxShadow radius10 mg-b-15 pd-15 tal">
      <van-field v-model="macno" clearable placeholder="扫描二维码或手动输入编号" @click-right-icon="scan">
        <div slot="right-icon">
          <img src="@/xhamy/img/i_scan.png" alt="">
        </div>
      </van-field>
    </div>
    <o-reporting :question="question" :macno="macno"></o-reporting>
  </div>
</template>

<script>
import oReporting from "./components/";
export default {
  name: "reporting",
  components: { oReporting },
  data() {
    return {
      macno: this.tool.macno,
      question: [
        // { name: "二维码", id: 1, status: false },
        // { name: "二维码", id: 2, status: false },
        // { name: "二维码", id: 3, status: false },
        // { name: "二维码", id: 4, status: false },
        // { name: "这个二维码有点长", id: 5, status: false },
        // { name: "二维码", id: 6, status: false },
        // { name: "二维码", id: 7, status: false },
        // { name: "二维码", id: 8, status: false },
        // { name: "二维码", id: 9, status: true },
        // { name: "二维码", id: 10, status: false },
        // { name: "二维码", id: 11, status: false },
        // { name: "二维码", id: 12, status: false },
        // { name: "二维码", id: 13, status: false },
      ]
    };
  },



  created() {
    const _this = this;
    _this.getErrorType();
  },

  mounted() {
    const _this = this;
  },

  methods: {
    getErrorType() {
      const _this = this;
      this.axios.post("/wxsite/user/api", { api_name: "get_fault_type" }).then(res => {
        console.log(res)
        _this.$hideLoading()
        if (res.code == 1) {
          res.data.forEach((item, index) => {
            let statusParam = Object.assign({}, item, {
              status: false
            });
            _this.$set(_this.question, index, statusParam);
          });
        } else {
          _this.$toast(res.msg)
        }
      })
    },
    scan() {
      console.log(123);
    },
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
