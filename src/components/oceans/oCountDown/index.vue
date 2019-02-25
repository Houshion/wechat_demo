<template>
  <div id="countDown">
    <div class="circle-border">
      <div class="circleContent flex flexCenter cfff">
        <div class="wd-100 font18">倒计时</div>
        <div class="wd-100 font24 fontb">{{cTime|countTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 0
    }
  },
  name: "countDown",
  data() {
    return {
      interval: null,
      cTime: this.time
    };
  },

  computed: {
    countTime() {
      // this.time = this.time--;
      // return this.time;
    }
  },

  created() {
    const _this = this;
    _this.init();
  },

  mounted() {
    const _this = this;
  },
  methods: {
    init() {
      const _this = this;
      _this.interval = setInterval(() => {
        if (_this.cTime > 1) {
          _this.cTime = _this.cTime - 1;
        } else {
          _this.cTime = 0;
          clearInterval(_this.interval);
        }
      }, 1000);
    }
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
