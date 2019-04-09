<template>
  <div id="countDown" class="box">
    <div class="circle-border">
      <div class="circleContent flex flexCenter cfff">
        <div class="wd-100 font18">{{title}}</div>
        <div class="wd-100 font24 fontb">{{cTime|countTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // time: {
    //   type: Number,
    //   default: 0
    // },
    title: {
      type: String,
      default: "倒计时"
    },
    to: String
  },
  name: "countDown",
  data() {
    return {
      interval: null,
      cTime: 0,
      time: 0
    };
  },

  computed: {
    countTime() {
      // this.time = this.time--;
      // return this.time;
    }
  },
  watch: {
    time() {
      this.init();
    }
  },

  created() {
    const _this = this;
    // _this.init();
  },

  mounted() {
    const _this = this;
  },
  methods: {
    init() {
      const _this = this;
      _this.cTime = _this.time;
      _this.interval = setInterval(() => {
        if (_this.cTime > 1) {
          _this.cTime = _this.cTime - 1;
        } else {
          clearInterval(_this.interval);
          _this.cTime = 0;
          _this.$router.replace({ name: this.to })
        }
      }, 1000);
    },
  }
};
</script>
<style lang='less' scoped>
#countDown {
  .circle-border {
    width: 162px;
    height: 162px;
    border: 1px solid red;
    border-radius: 50%;
    margin: auto;
    .circleContent {
      background: red;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 5px;
    }
  }
}
</style>
