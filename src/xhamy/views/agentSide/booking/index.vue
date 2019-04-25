<template>
  <div id="agentBooking" class="pd-15">
    <o-list :title="item.name" v-for="(item,index) in list" :key="index">
      <div class="title h100" slot="title">
        <div class="font16 tal">{{item.nickname}}</div>
      </div>
      <div class="tac" slot="center">
        <div class="wd-100 c000">{{item.seat_number}}</div>
        <div class="wd-100 cccc">预约座位</div>
      </div>
      <div slot="right" class="tar">
        <div class="c000">{{item.minute}}min</div>
        <div class="cccc">到达时间</div>
      </div>
    </o-list>
    <no-data v-if="list.length<=0"></no-data>
  </div>
</template>

<script>
import oList from "@/components/oceans/oList";
export default {
  name: "agentBooking",
  data() {
    return {
      list: Array,
      form: {
        api_name: "subscribe_order",
        token: this.base.getItem("agentToken")
      }
    };
  },

  components: { oList },

  created() {
    const _this = this;
    this.axios.post('/Wxsite/Agent/api', this.form).then(res => {
      _this.hideLoading();
      if (res.code != 1) return _this.toast(res.msg)
      _this.list = res.data.list
    })
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
