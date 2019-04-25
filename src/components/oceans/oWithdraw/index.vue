<template>
  <div id="oWithDraw">
    <div class="boxShadow radius10 mg-b-15 tal" v-for="(item,index) in listData" :key="index">
      <van-field
        :label="item.title"
        v-model="item.val"
        :placeholder="'请输入'+item.title"
        input-align="right"
        :required="!item.isNull"
        :onkeyup="item.key?item.key:''"
        clearable
        :type="item.type?item.type:'text'"
      />
    </div>
    <o-button class="wd-90" @btnClick="submit">提交</o-button>
  </div>
</template>

<script>
export default {
  name: "oWithDraw",
  props: {
    listData: Array
  },
  data() {
    return {};
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    submit() {
      // let isSubmit = true;
      // this.listData.forEach(item => {
      //   if (item.isNull && (item.val == null || item.val == "")) {
      //     item.error = true;
      //     isSubmit = false;
      //   }
      // });
      // if (isSubmit) {
      this.$emit("submit", this.listData);
      // }
    }
  }
};
</script>
<style lang='less' scoped>
.van-field__error-message {
  text-align: right !important;
}
</style>
