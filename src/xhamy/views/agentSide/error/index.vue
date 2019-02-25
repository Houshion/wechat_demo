<template>
  <div id="error">
    <o-list :title="item.name" v-for="(item,index) in list" :key="index">
      <div class="title h100" slot="title">
        <div class="font16 tal">{{item.name}}</div>
      </div>
      <div class="tac">
        <div class="wd-100 c000">{{item.seatNO}}</div>
        <div class="wd-100 cccc">预约座位</div>
      </div>
      <div slot="right" class="tar">
        <div class="c000">{{item.time}}min</div>
        <div class="cccc">到达时间</div>
      </div>
    </o-list>
  </div>
</template>

<script>
import oList from "@/components/oceans/oList";
export default {
  name: "error",
  data() {
    return {
      list: [
        { name: "迪尔西公司", seatNO: 15, time: 15 },
        { name: "迪尔西公司", seatNO: 15, time: 15 },
        { name: "迪尔西公司", seatNO: 15, time: 15 },
        { name: "迪尔西公司", seatNO: 15, time: 15 },
        { name: "迪尔西公司", seatNO: 15, time: 15 }
      ]
    };
  },

  components: { oList },

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
</style>
