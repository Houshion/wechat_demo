<template>
  <div id="chooseType" class="pd-15">
    <div class="boxShadow type flex flexStart pd-15 radius">
      <van-button
        class="typeItem mg-t-10 cccc radius5"
        v-for="(item,index) in typeData"
        :key="index"
        @click="change('tp',item.id)"
      >{{item.name}}</van-button>
      <van-button
        class="modeItem mg-t-10 cccc radius5"
        v-for="(item,index) in modeData"
        :key="index"
        @click="change('md',item.id)"
        :color="item.status?'':'cmain'"
      >{{item.name}}</van-button>
    </div>
    <div class="countTime boxShadow mg-t-15 radius" v-if="complete">
      <o-count-time ref="countTimes" class="mg-auto pd-20" :time="time" :start="start"></o-count-time>
      <div class="btn flex flexAround">
        <o-button @btnClick="op(3)">结束使用</o-button>
        <o-button color="cmain" @btnClick="op(2)">重启</o-button>
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
        { name: "背部按摩", id: 4 },
        { name: "睡眠模式", id: 5 },
      ],
      modeData: [
        { name: "按摩椅复位", id: 1 },
        { name: "通风开", id: 2 },
        { name: "通风关", id: 3 },
        { name: "加热开", id: 4 },
        { name: "加热关", id: 5 },
        { name: "充电控制开", id: 6 },
        { name: "充电控制关", id: 7 },
        { name: "靠背升", id: 8 },
        { name: "靠背降", id: 9 },
        { name: "升降停止", id: 10 },
      ],
      complete: this.$route.query.start ? false : true,
      // complete: true,
      start: this.$route.query.start ? false : true,
      time: 0
    };
  },

  created() {
    const _this = this;
    _this.init();
  },

  mounted() {
    const _this = this;
  },
  methods: {
    change(type, id) {
      const _this = this;
      this.check(() => {
        let url;
        switch (type) {
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
        this.axios.post(url, form).then(res => {
          _this.hideLoading()
          _this.toast(res.msg)
          // if (res.code == 1) {
          if (type == "md") {
            _this.modeData.forEach(item => {
              console.log(item.id, id)
              if (item.id === id) {
                return item.status = !item.status;
              }
            });
          }
        })
      });

    },
    check(call) {
      const _this = this;
      this.axios.post("/wxsite/device/detectionInterval", { macno: this.tool.macno }).then(res => {
        _this.hideLoading();
        if (res.code == 1) {
          if (res.data.hint != 0) {
            _this.$dialog({
              message: '你刚按摩没多久，建议休息15分钟',
              showCancelButton: true,
              cancelButtonText: "忽略"
            }).then(() => {
              console.log("休息")
            }).catch(() => {
              call()
            });
          } else {
            call()
          }
        }
      });
    },
    // 结束或停止使用
    op(type) {
      const _this = this;
      if (type == 3) {
        return this.$router.push({
          name: "confirmOrder",
          query: {
            macno: this.tool.macno,
            time: this.$refs.countTimes.cTime,
            type: 2,
          }
        })
      }
      this.axios.post("/wxsite/device/devicePc2", {
        macno: this.tool.macno,
        mode: type
      }).then(res => {
        _this.hideLoading()
      });
    },
    // 初始化
    init() {
      const _this = this;
      this.showLoading("电脑启动中，请稍候...")
      if (!_this.complete) { //电脑未启动，需启动电脑
        _this.axios.post("/wxsite/auth/startDevice", { order_id: _this.$route.query.order_id }).then(res => {
          // if (res.code == 1) {
          _this.complete = true
          _this.start = true
          _this.getDetail();
          // } else {
          //   _this.toast(res.msg)
          // }
        })
      } else { //电脑已启动，调取订单详情获取使用时长
        _this.hideLoading()
      }
    },
    getDetail() {
      const _this = this;
      this.axios.post("/wxsite/user/api", {
        api_name: 'order_info',
        order_id: this.$route.query.order_id,
      }).then(res => {
        _this.hideLoading()
        this.$refs.countTimes.cTime = res.data.useSecond
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
