<template>
  <div id="loading" v-if="isShow">
    <div class="loadingBox">
      <div class="loading loading4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="loading_text">{{ content }}</div>
    </div>
    <div class="mask" @click="isShow = false"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      content: "",
      src: ""
    };
  },
  methods: {}
};
</script>

<style>
@import "../../../../assets/css/o_color.less";
* {
  margin: 0;
  padding: 0;
}
#loading {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
#loading .mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
#loading .loadingBox {
  width: 60%;
  top: 30%;
  background: #ffffff;
  margin: auto;
  position: relative;
  border-radius: 15px;
  padding: 15px;
  z-index: 9;
}
#loading .loadingBox div {
  margin: 10px 0;
  font-size: 14px;
}
#loading .loadingBox .loading_text {
  font-size: 18px;
  word-wrap: break-word;
  font-weight: bold;
  margin: 20px 0;
}
#loading .loadingBox .loading_pic img {
  width: 100px;
}
#loading .confirm {
  padding: 10px !important;
  background: #41b883;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  color: #ffffff;
}
#loading .loading {
  margin: 10px auto !important;
}
</style>  