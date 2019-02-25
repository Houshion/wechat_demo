<template>
  <div id="reporting" class="pd-15">
    <div class="scanCode boxShadow radius10 mg-b-15 pd-15 tal">
      <van-field v-model="macno" clearable placeholder="扫描二维码或手动输入编号" @click-right-icon="scan">
        <div slot="right-icon">
          <img src="@/xhamy/img/i_scan.png" alt>
        </div>
      </van-field>
    </div>
    <o-reporting></o-reporting>
  </div>
</template>

<script>
import oReporting from "@/components/oceans/oReporting";
export default {
  name: "reporting",
  data() {
    return {
      macno: ""
    };
  },

  components: {
    oReporting
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },

  methods: {
    scan() {
      console.log(123);
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
