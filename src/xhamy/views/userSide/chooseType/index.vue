<template>
  <div id="chooseType" class="pd-15">
    <div class="boxShadow type flex flexStart pd-15 radius">
      <van-button
        class="typeItem mg-t-10 cccc radius5"
        v-for="(item,index) in typeData"
        :key="index"
        @click="change('tp',item.id)"
      >{{item.name}}</van-button>
      <o-button
        class="modeItem mg-t-10 cccc radius5"
        v-for="(item,index) in modeData"
        :key="index"
        @btnClick="change('md',item.id)"
        :color="item.status?'':'cmain'"
      >{{item.name}}</o-button>
    </div>
    <div class="countTime boxShadow mg-t-15 radius" v-if="complete">
      <o-count-time class="mg-auto pd-20" :start="start"></o-count-time>
      <div class="btn flex flexAround">
        <o-button @btnClick="change('op',3)">结束使用</o-button>
        <o-button color="cmain" @btnClick="change('op',2)">重启</o-button>
      </div>
      <div class="bottom">
        <img src="@/xhamy/img/wave.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chooseType",
  data() {
    return {
      typeData: [
        { name: "全身按摩", id: 1 },
        { name: "舒适按摩", id: 2 },
        { name: "颈部按摩", id: 3 },
        { name: "睡眠模式", id: 4 },
        { name: "背部按摩", id: 5 },
        { name: "复位按键", id: 6 },
        { name: "靠背降", id: 7 },
        { name: "靠背关", id: 8 },
        { name: "靠背升", id: 9 },
      ],
      modeData: [
        { name: "座椅通风", status: true, id: 1 },
        { name: "座椅加热", status: false, id: 2 },
        { name: "充电控制", status: false, id: 3 },
      ],
      complete: false,
      start: false,
    };
  },

  created() {
    const _this = this;
    // this.$showLoading("电脑启动中，请稍候...")
  },

  mounted() {
    const _this = this;
    _this.base.socket("connectinfo_beck_bjxhamy_" + _this.tool.userMsg.user_id, res => {
      _this.$hideLoading()
      if (res.code == 1) {
        _this.complete = true
        _this.open();
      } else {
        _this.$toast(res.msg)
      }
    })
  },
  methods: {
    change(type, id) {
      const _this = this;
      let url;
      switch (type) {
        case 'op':
          url = "/wxsite/device/devicePc2"
          break;
        case 'tp':
          url = "/wxsite/device/deviceMode2"
          break;
        case 'md':
          url = "/wxsite/device/devicePart2"
          break;
      }
      let form = {
        macno: this.tool.macno,
        mode: id,
      }
      this.$showLoading("请稍候...")
      this.axios.post(url, form).then(res => {
        _this.$hideLoading()
        if (res.code == 1) {
          if (type == "md") {
            _this.modeData.forEach(item => {
              if (item.id === id) {
                return item.status = !item.status;
              }
            });
          }
          // 成功
        } else {
          _this.$toast(res.msg)
        }
      })
    },
    open() {
      const _this = this;
      this.axios.post("/wxsite/auth/startDevice", { order_id: 1 }).then(res => {
        if (res.code == 1) {
          _this.start = true
        } else {
          _this.$toast(res.msg)
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
