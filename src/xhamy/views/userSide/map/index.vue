<template>
  <div id="indexMap">
    <o-map :marker="mapMarker" :markerIcon="markerIcon" :center="center" ref="oMap">
      <div class="po_ab tool">
        <div class="btns flex flexBetween">
          <div class="left">
            <img src="@/xhamy/img/reload.png" alt="">
          </div>
          <div class="right">
            <div>
              <img src="@/xhamy/img/list.png" alt="">
            </div>
            <div>
              <img src="@/xhamy/img/person.png" alt="">
            </div>
          </div>
        </div>
        <div class="scan" @click="scan">
          <div class="bac">
            <img src="@/xhamy/img/scanBac.png" alt="">
          </div>
          <div class="scanBtn">
            <img src="@/xhamy/img/scan.png" alt="">
          </div>
        </div>
      </div>
    </o-map>
  </div>
</template>

<script>
import tool from "./script";
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
          latitude: "22.981659454220267",
          longitude: "113.2648491134644",
          // 标注点点击事件
          f: () => {
            console.log(1);
          }
        },
        {
          id: 2,
          name: "北京七天酒店",
          latitude: "22.981629454220267",
          longitude: "113.72358491134644",
          f: () => {
            console.log(2);
          }
        }
      ],
      center: { lat: 23.986629454220267, lng: 114.72658491134644 }
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
    _this.base.getWx(function () {
      _this.base.getTmapLocation(res => {
        _this.center = res
      })
      _this.getSide()
    })
  },

  methods: {
    getSide() {
      const _this = this;
      this.axios.post("/wxsite/auth/map", {
        token: _this.base.getItem("token"),
        lng: _this.center.lng,
        lat: _this.center.lat,
        raidus: 300
      }).then(res => {
        if (res.code == 1) {
          let arr = new Array();
          res.data.list.forEach(item => {
            item.f = () => {
              tool.deviceMsg = item
            };
            arr.push(item)
          });
          _this.mapMarker = arr
          console.log(_this.mapMarker)
        }
      })
    },
    scan() {
      const _this = this;
      _this.base.scan(1, res => {
        alert(123)
      })
    }
  }

};
</script>
<style lang='less' scope>
@import "./style.less";
#app {
  height: 100%;
}
</style>
