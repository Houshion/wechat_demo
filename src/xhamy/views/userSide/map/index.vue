<template>
  <div id="indexMap">
    <t-map :marker="mapMarker" :markerIcon="markerIcon">
      <div class="po_ab tool">
        <div class="btns flex flexBetween">
          <div class="left">
            <img src="@/xhamy/img/reload.png" alt>
          </div>
          <div class="right">
            <div>
              <img src="@/xhamy/img/list.png" alt>
            </div>
            <div>
              <img src="@/xhamy/img/person.png" alt>
            </div>
          </div>
        </div>
        <div class="scan">
          <div class="bac">
            <img src="@/xhamy/img/scanBac.png" alt>
          </div>
          <div class="scanBtn">
            <img src="@/xhamy/img/scan.png" alt>
          </div>
        </div>
      </div>
    </t-map>
  </div>
</template>

<script>
export default {
  name: "indexMap",
  data() {
    return {
      // 标注点图标
      markerIcon: require("@/xhamy/img/marker.png"),
      mapMarker: [
        {
          id: 1,
          name: "北京后海酒店",
          latitude: "39.92300000",
          longitude: "116.5200000000",
          // 标注点点击事件
          f: () => {
            console.log(1);
          }
        },
        {
          id: 2,
          name: "北京七天酒店",
          latitude: "39.9254100000",
          longitude: "116.5220000000",
          f: () => {
            console.log(2);
          }
        }
      ]
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  }
};
</script>
<style lang='less' scope>
@import "./style.less";
#app {
  height: 100%;
}
</style>
