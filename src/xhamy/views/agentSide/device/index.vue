<template>
  <div id="place" class="pd-15">
    <o-list :title="item.name" v-for="(item,index) in list" :key="index">
      <div class="title tal" slot="title">
        <div class="font16">{{item.name}}</div>
        <div class="c999">编号：{{item.macno}}</div>
      </div>
      <div slot="right" class="h100 box price">
        <span
          class="font24"
          :class="item.state==1?'free':item.state==2?'using':'stop'"
        >{{item.state==1?"使用中":item.state==2?"使用中":"停用"}}</span>
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
        {
          name: "迪尔西公司",
          macno: 585235,
          state: 1,
          url: "/agent/deviceDetail"
        },
        {
          name: "迪尔西公司",
          macno: 585235,
          state: 2,
          url: "/agent/deviceDetail"
        },
        {
          name: "迪尔西公司",
          macno: 585235,
          state: 3,
          url: "/agent/deviceDetail"
        },
        {
          name: "迪尔西公司",
          macno: 585235,
          state: 1,
          url: "/agent/deviceDetail"
        },
        {
          name: "迪尔西公司",
          macno: 585235,
          state: 1,
          url: "/agent/deviceDetail"
        }
      ]
    };
  },

  components: {
    oList
  },

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
.free {
  color: #88e2e1;
}
.using {
  color: #f4ce7d;
}
.stop {
  color: #999999;
}
</style>
