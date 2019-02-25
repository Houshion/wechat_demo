<template>
  <div id="moneyDetail">
    <van-cell-group>
      <van-cell
        class="tal boxShadow mg-b-10 radius10"
        v-for="item in moneyDetail"
        :key="item.id"
        :title="item.name"
        :label="item.time"
      >
        <div
          class="font24 h100 flex flexEnd flexVcenter c000"
          :class="item.state==0 ? 'plus' : 'reduce'"
        >{{item.state==0 ? '+' : '-'}}{{item.money}}</div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "moneyDetail",
  props: {
    moneyDetail: Array
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
// @import "/css/o_color.less";
@plusColor: #a6e9e9;
@reduceColor: #f23a50;
.plus {
  color: @plusColor;
}
.reduce {
  color: @reduceColor;
}
</style>
