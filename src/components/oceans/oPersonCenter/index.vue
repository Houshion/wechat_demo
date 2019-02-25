<template>
  <div id="oPersonCenter">
    <div class="header">
      <img :src="backImg" class="wd-100">
      <div class="dataInfo">
        <img :src="headImg" alt>
        <slot name="info"></slot>
      </div>
    </div>
    <div class="list mg-t-10 tal">
      <van-cell-group v-for="(item1,id1) in listData" :key="id1" class="mg-t-10">
        <van-cell
          :title="item.name"
          clickable
          v-for="(item,index) in item1"
          :key="index"
          is-link
          :to="item.url"
        >
          <div slot="icon" class="iconImg box payIcon">
            <img :src="item.icon" class="wd-100">
          </div>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "oPersonCenter",
  props: {
    backImg: {
      type: String,
      default: require("./centerBac.png")
    },
    headImg: String,
    listData: Array
  },
  data() {
    return {};
  },

  components: {},

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
.dataInfo {
  position: absolute;
  top: 20px;
  width: 100%;
}
.iconImg {
  max-width: 20px;
  max-height: 20px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
