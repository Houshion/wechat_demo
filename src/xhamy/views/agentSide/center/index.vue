<template>
  <div id="agentCenter">
    <div class="pd-25 bcross">
      <div class="flex flexAround cfff pd-20 font14">
        <div class="orderNum">
          <div class="font32 mg-b-10 fontb">15</div>
          <div>今日订单数</div>
        </div>
        <div class="orderNum">
          <div class="font32 mg-b-10 fontb">5/10</div>
          <div>在线/总台数</div>
        </div>
      </div>
      <div class="flex flexAround cfff font14">
        <div class="orderNum">
          <div class="mg-b-5 fontb">￥688.88</div>
          <div>今日收益</div>
        </div>
        <div class="orderNum">
          <div class="mg-b-5 fontb">￥688.88</div>
          <div>今日收益</div>
        </div>
        <div class="orderNum">
          <div class="mg-b-5 fontb">￥688.88</div>
          <div>今日收益</div>
        </div>
      </div>
    </div>
    <div class="btnFun flex flexWrap flexStart mg-t-15">
      <div
        class="type boxShadow radius10 border"
        v-show="item.status"
        v-for="(item,index) in dataType"
        :key="index"
      >
        <router-link :to="{ path: item.url}">
          <img :src="item.icon">
          <div class="c999">{{item.title}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "agentCenter",
  data() {
    return {
      dataType: [
        {
          title: "收入统计",
          icon: require("@/xhamy/img/icon_count.png"),
          url: "/agent/account",
          status: true
        },
        {
          title: "场地管理",
          icon: require("@/xhamy/img/icon_place.png"),
          url: "/agent/place",
          status: true
        },
        {
          title: "设备管理",
          icon: require("@/xhamy/img/icon_device.png"),
          url: "/agent/device",
          status: false
        },
        {
          title: "订单管理",
          icon: require("@/xhamy/img/icon_order.png"),
          url: "/agent/order",
          status: true
        },
        {
          title: "账户管理",
          icon: require("@/xhamy/img/icon_user.png"),
          url: "/agent/user",
          status: true
        },
        {
          title: "故障管理",
          icon: require("@/xhamy/img/icon_error.png"),
          url: "/agent/error",
          status: true
        },
        {
          title: "预约管理",
          icon: require("@/xhamy/img/icon_booking.png"),
          url: "/agent/booking",
          status: false
        }
      ]
    };
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
.btnFun {
  .type {
    width: 45%;
    padding: 30px;
    margin: 0 2.5% 15px;
    img {
      max-width: 100px;
    }
  }
}
</style>
