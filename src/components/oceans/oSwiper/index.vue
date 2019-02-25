<template>
  <div id="oSwiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width:100%">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "oSwiper",
  props: {
    images: Array
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
</style>
