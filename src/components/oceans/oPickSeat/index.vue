<template>
  <div id="oPickSeat" class="pd-15">
    <div class="flex state pd-t-15 pd-b-30">
      <div class="unpick mg-r-30">
        <div class="flex">
          <div class="icon">
            <img src="@/xhamy/img/seat2.png" alt>
          </div>
          <div class="font16 mg-l-5">未选</div>
        </div>
      </div>
      <div class="pick">
        <div class="flex">
          <div class="icon">
            <img src="@/xhamy/img/seat1.png" alt>
          </div>
          <div class="font16 mg-l-5">已选</div>
        </div>
      </div>
    </div>
    <div class="seat flex flexBetween">
      <div class="flexItem" :style="style" v-for="(item,index) in seatData" :key="index">
        <img src="@/xhamy/img/seat1.png" v-if="item.selected">
        <img src="@/xhamy/img/seat2.png" @click="selectSeat(item.id)" v-else>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oPickSeat",
  props: {
    col: {
      type: Number,
      default: 8
    },
    seatData: Array
  },
  data() {
    return {
      style: "width:" + 100 / this.col + "%"
    };
  },

  computed: {},

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    selectSeat(id) {
      const _this = this;
      _this.seatData[id].selected = !_this.seatData[id].selected;
    }
  }
};
</script>
<style lang='less' scoped>
.icon img {
  width: 20px;
}
.seat .flexItem {
  margin: 5px 0;
}
.seat img {
  width: 36px;
}
</style>
