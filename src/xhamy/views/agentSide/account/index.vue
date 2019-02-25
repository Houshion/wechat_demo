<template>
  <div id="account">
    <div class="boxShadow pd-15">
      收入
      <span>￥3256.00</span>
    </div>
    <div class="pd-15">
      <o-list :title="item.name" v-for="(item,index) in list" :key="index">
        <div class="title tal" slot="title">
          <div class="font16">{{item.name}}</div>
          <div class="c999">编号：{{item.macno}}</div>
        </div>
        <div class="tal h100 box">使用次数：{{item.useTime}}</div>
        <div slot="right" class="h100 box price">
          +
          <span class="font24">{{item.price|toFixed(2)}}</span>
        </div>
      </o-list>
    </div>
  </div>
</template>

<script>
import oList from "@/components/oceans/oList";
export default {
  name: "account",
  data() {
    return {
      list: [
        { name: "迪尔西公司", macno: 585235, useTime: 10, price: 562 },
        { name: "迪尔西公司", macno: 585235, useTime: 10, price: 562 },
        { name: "迪尔西公司", macno: 585235, useTime: 10, price: 562 },
        { name: "迪尔西公司", macno: 585235, useTime: 10, price: 562 },
        { name: "迪尔西公司", macno: 585235, useTime: 10, price: 562 }
      ]
    };
  },

  components: { oList },

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
.price {
  color: #88e2e1;
}
</style>
