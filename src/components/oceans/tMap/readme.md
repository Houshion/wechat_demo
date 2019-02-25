# API参数
> markerIcon —— 标注覆盖物图片，类型String，无默认值
> locationImg —— 中心点覆盖物图片，类型String，默认自带图片，路径./img/location.png
> marker —— 标注覆盖物信息，类型Array，无默认值

## 参数示例：
>> markerIcon: require("@/xhamy/img/marker.png"),
>> mapMarker: [
    {
      // 标注点ID
      id: 1,
      // 标注点名称
      name: "北京后海酒店",
      // 标注点经纬度
      latitude: "39.92300000",
      longitude: "116.5200000000",
      // 标注点点击事件
      f: () => {
        console.log(1);
      }
    },
  ],
>> locationImg: require("./img/location.png")
