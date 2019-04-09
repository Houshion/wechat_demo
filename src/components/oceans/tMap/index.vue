<template>
  <div id="tMap">
    <slot></slot>
  </div>
</template>

<script>
import mapjs from "./map";
export default {
  name: "tMap",
  props: {
    // 地图数据
    marker: Array,
    markerIcon: String,
    locationImg: {
      type: String,
      default: require("./img/location.png")
    },
    center: {
      type: Object,
      default: () => ({
        lat: 39.916527,
        lng: 116.397128
      })
    },
  },
  data() {
    return {
      // 地图
      map: null,
      // 标注点数组
      markersArray: [],
      // 中心点图标
      // locationImg: require("./img/location.png")
      // center: {
      //   lat: 23.02067,
      //   lng: 113.75179
      // }
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
    // _this.wechat.getWx(function () {
    //   _this.wechat.getTmapLocation(res => {
    //     _this.center = res;
    //   })
    // })

  },
  watch: {
    center() {
      this.init();
    },
    marker() {
      this.setMarker()
    },
  },
  methods: {
    init() {
      const _this = this;
      _this.clearOverlays();
      // 创建地图，设置地图中心点
      let center = new qq.maps.LatLng(_this.center.lat, _this.center.lng);
      if (_this.map) {
        _this.map.setCenter(center);
      } else {
        _this.map = new qq.maps.Map(document.getElementById("tMap"), {
          center: center,
          disableDefaultUI: true,
          zoomControl: false,
          zoom: 12,
          mapTypeId: qq.maps.MapTypeId.ROADMAP,
          draggable: true, //手势控制, 用来设置地图是否能够鼠标拖拽，默认值为“可以”；
          scrollwheel: true, //用来配置地图是否能够通过鼠标滚轮操作进行放大，默认值为“可以”；
          disableDoubleClickZoom: false // 用来配置地图是否可以通过鼠标双击进行放大，默认值为“可以”。
        });
        let marker = new qq.maps.Marker({
          position: center,
          map: _this.map
        });

        let anchor = new qq.maps.Point(10.5, 39),
          size = new qq.maps.Size(21, 38),
          origin = new qq.maps.Point(0, 0),
          markerIcon = new qq.maps.MarkerImage(
            _this.locationImg,
            size,
            origin,
            anchor
          );
        marker.setIcon(markerIcon);
      }
      _this.$hideLoading();
    },
    setMarker() {
      const _this = this;
      _this.marker.map(item => {
        console.log(item)
        // 创建标记
        let marker = new qq.maps.Marker({
          position: new qq.maps.LatLng(item.lat, item.lng),
          map: _this.map,
          // 将数据信息赋值给marker的data属性，用做点击显示与跳转
          data: item
        });
        let anchor = new qq.maps.Point(0, 52),
          size = new qq.maps.Size(50, 52),
          origin = new qq.maps.Point(0, 0),
          markerIcon = new qq.maps.MarkerImage(
            _this.markerIcon,
            size,
            origin,
            anchor
          );
        marker.setIcon(markerIcon);
        // 获取标记的点击事件
        qq.maps.event.addListener(marker, "click", e => {
          item.f();
        });
        // 存放所有marker
        _this.markersArray.push(marker);
      });
    },
    // 清除已有的地图标记
    clearOverlays() {
      if (this.markersArray) {
        this.markersArray.map(item => {
          item.setMap(null);
        });
      }
    }
  }
};
</script>
<style lang='less' scoped>
#tMap {
  height: 100%;
  text-align: left;
}
</style>