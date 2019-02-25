<template>
  <div id="chooseTc" class="pd-15">
    <div class="radius10">
      <o-swiper :images="images"></o-swiper>
    </div>
    <div class="choose boxShadow radius10 mg-t-15">
      <div class="deviceMsg pd-b-25">
        <div class="macno pd-tb-25 fontb">设备号：{{deviceMsg.macno}}</div>
        <div class="cbbb">请选择使用时间</div>
        <div
          class="tcItem flex mainBorder wd-60 radius5"
          v-for="(item,index) in deviceMsg.tc"
          :key="index"
        >
          <div class="tcName bmain cfff wd-40">{{item.name}}</div>
          <div class="time wd-60">{{item.time}}分钟</div>
        </div>
        <!-- <mu-button color="#c2a466" class="wd-80 radius5 mg-50">提交</mu-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import oSwiper from "@/components/oceans/oSwiper";
export default {
  name: "chooseTc",
  data() {
    return {
      // 轮播图
      images: [require("@/xhamy/img/banner.png")],
      // 设备信息
      deviceMsg: {
        macno: "201901011234",
        tc: [
          { name: "合适放松", time: 30 },
          { name: "合适放松", time: 30 },
          { name: "合适放松", time: 30 }
        ]
      }
    };
  },

  components: {
    oSwiper
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
