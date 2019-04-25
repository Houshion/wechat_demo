<template>
  <div id="bookingOrder" class="pd-15">
    <div class="boxShadow radius10 order mg-b-15" v-for="item in data" :key="item.id">
      <van-cell value="内容">
        <div class="title tal" slot="title">
          <div class="c999">设备号</div>
          <div class="fontb">{{item.macno}}</div>
        </div>
        <div class="tal dateTime">{{item.dateTime}}</div>
        <div slot="right-icon">
          <o-button @btnClick="cancelBtn(item.subscribe_id)">取消预约</o-button>
        </div>
      </van-cell>
    </div>
    <no-data v-if="data.length<=0"></no-data>
  </div>
</template>

<script>
export default {
  name: "bookingOrder",
  data() {
    return {
      data: [],
      form: {
        api_name: "cancel_subscribe",
        subscribe_id: 0
      }
    };
  },

  components: {},

  created() {
    const _this = this;
    this.init()
  },

  mounted() {
    const _this = this;
  },
  methods: {
    cancelBtn(id) {
      const _this = this
      this.confirm({
        title: "注意", // 标题
        content: "确定取消吗？", // 内容
        leftBtn: "再想想", // 左边按钮
        confirm: () => {
          // 又按钮事件
          this.form.subscribe_id = id
          this.axios.post("/wxsite/user/api", this.form).then(res => {
            _this.hideLoading();
            if (res.code != 1) return _this.toast(res.msg)
            _this.init()
          })
        },
        cancel: () => {
          // 左按钮事件
        }
      });
    },
    init() {
      const _this = this
      this.axios.post("/wxsite/user/api", { api_name: "subscribe_order" }).then(res => {
        _this.hideLoading();
        if (res.code != 1) return _this.toast(res.msg)
        _this.data = res.data.list
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
.van-cell {
  display: -moz-box;
  -moz-box-pack: center;
  -moz-box-align: center;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: box;
  box-pack: center;
  box-align: center;
}
</style>
