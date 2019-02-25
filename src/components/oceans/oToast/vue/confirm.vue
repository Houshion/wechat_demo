<template>
  <div id="confirm" v-if="isShow">
    <div class="confirmBox">
      <div class="Ctitle">{{ title }}</div>
      <div class="Ctext">
        <div class="text" v-if="text">{{ content }}</div>
        <input
          type="text"
          v-if="input"
          v-model="content"
          :maxlength="maxlength"
          :onkeyup="onkeyup"
          style="width:100%"
        >
      </div>
      <div class="button">
        <button class="cancel" @click="cancel">{{name2 ? name2 : '取消'}}</button>
        <button class="Cconfirm" @click="confirm">{{name ? name : '确定'}}</button>
      </div>
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
      title: "",
      input: false,
      text: true,
      maxlength: 99,
      onkeyup: "",
      refunc: null,
      refunc2: null,
      name: null,
      name2: null
    };
  },
  methods: {
    confirm: function() {
      this.isShow = false;
      if (this.refunc != null) this.refunc();
    },
    cancel: function() {
      this.isShow = false;
      if (this.refunc2 != null) this.refunc2();
    }
  }
};
</script>

<style lang='less' scoped>
@import "../../../../assets/css/o_color.less";

* {
  margin: 0;
  padding: 0;
}
#confirm {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
#confirm button {
  border: none;
}
#confirm input {
  padding: 10px;
  border-radius: 5px;
  border: 1px #e1e1e1 solid;
}
#confirm .mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
#confirm .confirmBox {
  width: 60%;
  top: 40%;
  background: #ffffff;
  margin: auto;
  position: relative;
  border-radius: 15px;
  z-index: 9;
}
#confirm .confirmBox div {
  margin: 10px 0;
  font-size: 14px;
  padding: 0 10px;
}
#confirm .confirmBox .Ctext {
  font-size: 18px;
  word-wrap: break-word;
  font-weight: bold;
  margin: 20px 0;
}
#confirm .confirmBox .Ctitle {
  padding-top: 10px;
}
#confirm .confirmBox .button {
  display: flex;
  padding: 0;
}
#confirm .confirmBox .button button {
  width: 50%;
}
#confirm .Cconfirm {
  padding: 10px !important;
  background: @baseColor;
  border-bottom-right-radius: 15px;
  color: #ffffff;
}
#confirm .cancel {
  padding: 10px !important;
  border-bottom-left-radius: 15px;
}
</style>  