<template>
  <div id="swipeCell">
    <van-swipe-cell :right-width="65" :on-close="onClose" @click="clickCell">
      <van-cell-group class="tal">
        <van-cell title="单元格" value="内容" size="large" label="描述信息"/>
      </van-cell-group>
      <div slot="right" class="delRightBtn">删除</div>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  name: "swipeCell",
  props: {
    data: Array
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
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "cell":
          console.log("detail2");
          break;
        case "outside":
          instance.close();
          break;
        case "right":
          this.$emit("onClose", "");
          instance.close();
          // Dialog.confirm({
          //   message: "确定删除吗？"
          // }).then(() => {
          //   instance.close();
          // });
          break;
      }
    },
    clickCell() {
      this.$emit("detail", "");
    }
  }
};
</script>
<style lang='less' scoped>
#swipeCell {
  .delRightBtn {
    color: #ffffff;
    font-size: 15px;
    width: 65px;
    height: 69px;
    display: inline-block;
    text-align: center;
    line-height: 69px;
    background-color: red;
  }
}
</style>
