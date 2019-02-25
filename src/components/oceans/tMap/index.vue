<template>
  <div id="tMap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tMap",
  props: {
    // 地图数据
    marker: Array,
    markerIcon: String,
    locationImg: {
      type: String,
      default: require("./img/location.png")
    }
  },
  data() {
    return {
      // 地图
      mapView: "",
      // 标注点数组
      markersArray: [],
      // 中心点图标
      // locationImg: require("./img/location.png")
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
    _this.init(_this.marker);
  },
  methods: {
    init(arr) {
      const _this = this;
      _this.clearOverlays();
      // 创建地图，设置地图中心点
      let center = new qq.maps.LatLng(39.916527, 116.397128);
      let map = null;
      if (map) {
        map.setCenter(center);
      } else {
        map = new qq.maps.Map(document.getElementById("tMap"), {
          center: center,
          disableDefaultUI: true,
          zoom: 13
        });
        let marker = new qq.maps.Marker({
          position: center,
          map: map
        });
        let anchor = new qq.maps.Point(0, 39),
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
      arr.map(item => {
        // 创建标记
        let marker = new qq.maps.Marker({
          position: new qq.maps.LatLng(item.latitude, item.longitude),
          map: map,
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
}
</style>
