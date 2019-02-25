<template>
  <div id="agentBooking" class="pd-15">
    <div
      class="boxShadow radius10 tal pd-15 mg-b-15"
      v-for="(item,index) in errorData"
      :key="index"
    >
      <div class="fontb font18">{{item.errorName}}</div>
      <div class="flex flexStart mg-tb-10">
        <div class="title c999 wd-30">设备编号</div>
        <div class="wd-70">{{item.macno}}</div>
      </div>
      <div class="flex flexStart">
        <div class="title c999 wd-30">设备地址</div>
        <div class="wd-70">{{item.place}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "agentBooking",
  data() {
    return {
      errorData: [
        { errorName: "停机", macno: "158742151", place: "南城区高盛科技园" },
        { errorName: "停机", macno: "158742151", place: "南城区高盛科技园" }
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
.van-cell {
  padding: 0px 15px;
}
</style>
