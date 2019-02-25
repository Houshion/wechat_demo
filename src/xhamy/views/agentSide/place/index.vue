<template>
  <div id="place" class="pd-15">
    <o-list :title="item.name" :url="item.url" v-for="(item,index) in list" :key="index">
      <div class="title tal" slot="title">
        <div class="font16">{{item.name}}</div>
        <div class="c999">编号：{{item.macno}}</div>
      </div>
      <div slot="right" class="h100 box price">
        +
        <span class="font24">{{item.price|toFixed(2)}}</span>
      </div>
    </o-list>
  </div>
</template>

<script>
import oList from "@/components/oceans/oList";
export default {
  name: "place",
  data() {
    return {
      list: [
        { name: "迪尔西公司", macno: 585235, price: 562, url: "placeDetail" },
        { name: "迪尔西公司", macno: 585235, price: 562, url: "placeDetail" },
        { name: "迪尔西公司", macno: 585235, price: 562, url: "placeDetail" },
        { name: "迪尔西公司", macno: 585235, price: 562, url: "placeDetail" },
        { name: "迪尔西公司", macno: 585235, price: 562, url: "placeDetail" }
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
