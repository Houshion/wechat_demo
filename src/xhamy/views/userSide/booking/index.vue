<template>
  <div id="booking" class="pd-15 bfff">
    <div class="deviceMsg boxShadow radius10 mg-b-15 pd-15 tal">
      <div class="cbbb">设备编号：{{deviceMsg.macno}}</div>
      <div class="pd-tb-15 flex flexStart">
        <div class="icon">
          <img src="@/xhamy/img/i_location.png" class="iconImg">
        </div>
        <div>{{deviceMsg.address}}</div>
      </div>
      <div class="flex flexStart">
        <div class="icon">
          <img src="@/xhamy/img/i_time.png" class="iconImg">
        </div>
        <div @click="timePick=true">
          预计到达时间
          <span
            v-if="arriveTime"
            class="cbbb beee pd-lr-10 mg-l-5 radius5"
          >{{form.minute}}min ></span>
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
    <!-- <o-seat ref="oseat" :col="8" :seatData="seatData" class="boxShadow radius10" @getCall="getId"></o-seat> -->
    <o-seat ref="oseat" :col="8" class="boxShadow radius10" @getCall="getId"></o-seat>
    <o-button class="wd-80 radius10 mg-t-50" @btnClick="submitBooking">确认预约</o-button>
  </div>
</template>

<script>
import * as script from "./script";
import oPicker from "@/components/oceans/oPicker";
import oSeat from "@/components/oceans/oPickSeat";
export default {
  name: "booking",
  data() {
    return {
      // 座位数据
      seatData: script.seatData,
      // picker选择数据
      pickData: this.strTime(script.time),
      timePick: false,
      arriveTime: '5',
      deviceMsg: this.tool.deviceMsg,
      form: {
        token: this.tool.token,
        minute: '5',
        device_id: 0
      }
    };
  },

  components: {
    oSeat,
    oPicker
  },

  created() {
    const _this = this;
    _this.getList()
  },

  mounted() {
    const _this = this;
  },

  methods: {
    strTime(res) {
      let arr = new Array()
      res.forEach(item => {
        arr.push(item + "min")
      });
      return arr
    },
    onConfirm(value, index) {
      this.timePick = false;
      this.form.minute = script.time[index];
    },
    getList() {
      const _this = this;
      this.axios.post("/wxsite/auth/site", {
        token: this.tool.token,
        site_id: this.tool.deviceMsg.site_id
      }).then(res => {
        _this.hideLoading()
        if (res.code == 1) {
          // _this.seatData = res.data.list
          _this.$refs.oseat.changeData(res.data.list)
        }
      });
    },
    submitBooking() {
      const _this = this
      if (this.form.device_id == 0) {
        return this.toast("请选择设备")
      }
      this.axios.post("/wxsite/auth/subscribe", this.form).then(res => {
        _this.hideLoading()
        _this.toast(res.msg)
        if (res.code == 1) {
          setTimeout(() => {
            WeixinJSBridge.call('closeWindow')
          }, 2000);
        }
      });
    },
    getId(id, item) {
      console.log(id)
      this.form.device_id = id
      this.deviceMsg = item[0
      ]
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
