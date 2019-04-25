<template>
  <div id="swipeCell">
    <!-- <van-swipe-cell
      :right-width="65"
      :on-close="onClose"
      v-for="(item,index) in data"
      :key="index"
      class="mg-t-15 boxShadow radius10"
      @click="clickCell(item)"
    >
      <van-cell-group class="tal">
        <van-cell title="单元格" value="内容" size="large" label="描述信息"/>
      </van-cell-group>
      <div slot="right" class="delRightBtn">删除</div>
    </van-swipe-cell>-->
    <div @click="clickCell(item)" v-for="(item,index) in data" :key="index">
      <mt-cell-swipe
        title="消息"
        :label="item.content"
        class="mg-t-15 boxShadow radius10 tal"
        :right="[
        {
          content: '删除',
          style: { background: 'red', color: '#fff' },
          handler: () => onDelete(item)
        }
      ]"
      >{{item.ctime | timeStr("Y-m-d H:i")}}</mt-cell-swipe>
    </div>
    <no-data v-if="data.length<=0"></no-data>
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
    /* onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "cell":
          // this.clickCell('cell')
          instance.close();
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
    }, */
    onDelete(res) {
      this.$emit("onClose", res);
    },
    clickCell(res) {
      this.$emit("detail", res);
    }
  }
};
</script>
<style lang='less' scoped>
#swipeCell {
  a {
    color: #000;
  }
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
