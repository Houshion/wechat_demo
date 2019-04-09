<!-- using -->
<template>
  <div id="using" class="vh100">
    <o-countDown ref="countDown" :title="title" to="indexMap"></o-countDown>
    <div class="bottom">
      <img src="@/xhamy/img/wave.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'using',
  data() {
    return {
      title: "合适放松"
    };
  },
  components: {},
  computed: {},
  created() {
    const _this = this;
    this.init()
  },
  methods: {
    init() {
      const _this = this;
      const id = _this.$route.query.order_id
      this.axios.post("/Wxsite/Device/api", {
        api_name: 'count_down',
        order_id: id
      }).then(res => {
        _this.$hideLoading()
        if (res.code == 1) {
          _this.$refs.countDown.time = res.data.second;
          _this.title = res.data.item_name;
        }
      })
    }
  }
};
</script>
<style scoped lang="less">
#using {
  #countDown {
    height: 80vh;
  }
  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    img {
      width: 100%;
      display: bolc;
    }
  }
}
</style>