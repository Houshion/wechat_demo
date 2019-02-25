<template>
  <div id="chooseType" class="pd-15">
    <div class="boxShadow type flex flexStart pd-15">
      <van-button
        class="typeItem mg-t-10 cccc radius5"
        v-for="(item,index) in typeData"
        :key="index"
      >{{item}}</van-button>
    </div>
    <div class="countTime boxShadow mg-t-15 pd-15">
      <o-count-time class="mg-auto pd-20"></o-count-time>
      <div class="btn flex flexAround">
        <o-button @btnClick="a">结束使用</o-button>
        <o-button color="#fff">重启</o-button>
      </div>
    </div>
    <van-loading/>
  </div>
</template>

<script>
// import oCountTime from "@/components/oceans/oCountTime";
export default {
  name: "chooseType",
  data() {
    return {
      typeData: [
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩",
        "肩膀按摩"
      ]
    };
  },

  components: {
    // oCountTime
  },

  created() {
    const _this = this;
    this.$toast("123");
  },

  mounted() {
    const _this = this;
    // _this.$toast("电脑启动中，请稍候...");
  },
  methods: {
    a() {
      console.log(this);
      // this.$toast(123);
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
