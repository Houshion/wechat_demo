<template>
  <div id="countTime">
    <div class="circle-border mg-auto">
      <div class="circleContent flex flexCenter cfff">
        <div class="wd-100 font18">使用时间</div>
        <div class="wd-100 font24 fontb">
          {{cTime|countMin}}
          <span class="font14">min</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "countTime",
  props: {
    time: {
      type: Number,
      default: 0
    },
    start: {
      type: Boolean,
      default: false
    }
  },
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
      if (_this.start) {
        _this.interval = setInterval(() => {
          _this.cTime = _this.cTime + 1;
        }, 1000);
      }
    },
  }
};
</script>
<style lang='less' scoped>
#countTime {
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
