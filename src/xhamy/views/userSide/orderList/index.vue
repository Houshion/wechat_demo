<template>
  <div id="orderList">
    <!-- <van-cell-group>
      <van-cell
        class="tal"
        v-for="item in orderList"
        :key="item.id"
        :title="item.name"
        :label="item.time"
      >
        <div class="font24 h100 flex flexEnd flexVcenter c000">-￥{{item.price | toFixed(2)}}</div>
      </van-cell>
    </van-cell-group>-->
    <o-order :orderList="orderList"></o-order>
  </div>
</template>

<script>
import oOrder from "@/components/oceans/oOrderList";
export default {
  name: "orderList",
  data() {
    return {
      orderList: [
        { id: 1, name: "合适放松", time: "2019-02-14", price: 20 },
        { id: 2, name: "合适放松", time: "2019-02-14", price: 20 },
        { id: 3, name: "合适放松", time: "2019-02-14", price: 20 }
      ]
    };
  },

  components: {
    oOrder
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
