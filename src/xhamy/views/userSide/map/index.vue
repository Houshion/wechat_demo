<template>
  <div id="indexMap">
    <o-map :marker="mapMarker" :markerIcon="markerIcon" :center="center" ref="oMap">
      <div class="po_ab tool">
        <!-- <div class="btns flex flexBetween"> -->
        <div class="left" @click="reload">
          <img src="@/xhamy/img/reload.png" alt="">
        </div>
        <div class="right">
          <router-link :to="{name:'orderList'}">
            <img src="@/xhamy/img/list.png" alt="">
          </router-link>
          <router-link :to="{name:'centerInfo'}">
            <img src="@/xhamy/img/person.png" alt="">
          </router-link>
        </div>
        <!-- </div> -->
        <div class="scan">
          <div class="bac">
            <img src="@/xhamy/img/scanBac.png" alt="">
          </div>
          <div class="scanBtn tac" @click="scan">
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
        // {
        //   id: 1,
        //   name: "北京后海酒店",
        //   latitude: "22.981659454220267",
        //   longitude: "113.2648491134644",
        //   // 标注点点击事件
        //   f: () => {
        //     console.log(1);
        //   }
        // },
        // {
        //   id: 2,
        //   name: "北京七天酒店",
        //   latitude: "22.981629454220267",
        //   longitude: "113.72358491134644",
        //   f: () => {
        //     console.log(2);
        //   }
        // }
      ],
      center: ''
    };
  },

  components: {},

  created() {
    const _this = this;
    _this.wechat.getWx(function () {
      _this.wechat.getTmapLocation(res => {
        _this.center = res
        _this.hideLoading()
        // alert(JSON.stringify(res))
        // _this.showLoading();
        _this.getSide()
      })
    })
  },

  mounted() {
    const _this = this;
  },

  methods: {
    getSide() {
      const _this = this;
      this.axios.post("/wxsite/auth/map", {
        token: _this.base.getItem("token"),
        lng: _this.center.lng,
        lat: _this.center.lat,
        raidus: 30000
      }).then(res => {
        if (res.code == 1) {
          let arr = new Array();
          res.data.list.forEach(item => {
            item.f = () => {
              _this.tool.deviceMsg = item;
              _this.$router.push({ name: "booking" })
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
      _this.wechat.scan(1, res => {
        console.log(res)
      })
    },
    reload() {
      // 地图刷新回到中心点
      this.$refs.oMap.mapReload();
    }
  }

};
</script>
<style lang='less' scope>
@import "./style.less";
#indexMap {
  height: 100vh;
}
</style>