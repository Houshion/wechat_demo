<template>
  <div id="orderList">
    <van-cell-group>
      <van-cell
        class="tal"
        v-for="item in orderList"
        :key="item.id"
        :title="item.name"
        :label="item.time"
      >
        <div class="font24 h100 flex flexEnd flexVcenter c000">-￥{{item.price | toFixed(2)}}</div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "orderList",
  props: {
    orderList: Array
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
