<template>
  <div id="booking" class="pd-15 bfff">
    <div class="deviceMsg boxShadow radius10 mg-b-15 pd-15 tal">
      <div class="cbbb">设备编号：2019010151452</div>
      <div class="pd-tb-15 flex flexStart">
        <div class="icon">
          <img src="@/xhamy/img/i_location.png" class="iconImg">
        </div>
        <div>南城区高盛科技园</div>
      </div>
      <div class="flex flexStart">
        <div class="icon">
          <img src="@/xhamy/img/i_time.png" class="iconImg">
        </div>
        <div @click="timePick=true">
          预计到达时间
          <span v-if="arriveTime" class="cbbb beee pd-lr-10 mg-l-5 radius5">{{arriveTime}}</span>
        </div>
        <van-popup v-model="timePick" position="bottom">
          <van-picker
            show-toolbar
            :columns="pickData"
            :visible-item-count="3"
            @cancel="timePick=false"
            @confirm="onConfirm"
          />
        </van-popup>
        <!-- <o-picker
          :show="timePick"
          :pickData="pickData"
          :showCount="3"
          @click="timePick=true"
          @confirm="pick"
        ></o-picker>-->
      </div>
    </div>

    <o-seat :col="8" :seatData="seatData" class="boxShadow radius10"></o-seat>
    <mu-button color="#c2a466" class="wd-80 radius10 mg-t-50">确认预约</mu-button>
  </div>
</template>

<script>
import * as script from "./script";
import { Button } from "vant";
import oPicker from "@/components/oceans/oPicker";
import oSeat from "@/components/oceans/oPickSeat";
export default {
  name: "booking",
  data() {
    return {
      // 座位数据
      seatData: script.seatData,
      // picker选择数据
      pickData: script.time,
      timePick: false,
      arriveTime: null
    };
  },

  components: {
    oSeat,
    oPicker
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    onConfirm(value, index) {
      this.timePick = false;
      this.arriveTime = value + " >";
    },
    pick(val) {
      this.arriveTime = val + " >";
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
