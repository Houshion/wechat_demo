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
          <o-button v-if="item.state==0">取消预约</o-button>
          <o-button v-else color="cmain">已使用</o-button>
        </div>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookingOrder",
  data() {
    return {
      data: [
        { id: 1, macno: 201903010001, dateTime: "2019-03-01", state: 0 },
        { id: 2, macno: 201903010002, dateTime: "2019-03-01", state: 1 }
      ]
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {}
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
