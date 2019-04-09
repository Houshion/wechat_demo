<template>
  <div id="Xtoast" v-if="isShow">
    <div class="XtoastBox">
      <div class="Xtoast_pic">
        <img :src="src" alt="">
      </div>
      <div class="Xtoast_text">{{ content }}</div>
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
#Xtoast {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
#Xtoast .mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
#Xtoast .XtoastBox {
  width: 60%;
  top: 30%;
  background: #ffffff;
  margin: auto;
  position: relative;
  border-radius: 15px;
  padding: 15px;
  z-index: 9;
}
#Xtoast .XtoastBox div {
  margin: 10px 0;
  font-size: 14px;
}
#Xtoast .XtoastBox .Xtoast_text {
  font-size: 18px;
  word-wrap: break-word;
  font-weight: bold;
  margin: 20px 0;
}
#Xtoast .XtoastBox .Xtoast_pic img {
  width: 100px;
}
#Xtoast .confirm {
  padding: 10px !important;
  background: #41b883;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  color: #ffffff;
}
</style>  