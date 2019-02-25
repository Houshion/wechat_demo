<template>
  <div id="centerInfo">
    <!-- 可添加backImg参数，用于修改背景图片 -->
    <o-center :headImg="dataInfo.img" :listData="listData">
      <div slot="info" class="cfff">
        <div class="name">{{dataInfo.name}}</div>
        <div class="phone">{{dataInfo.phone}}</div>
      </div>
    </o-center>
  </div>
</template>

<script>
import oCenter from "@/components/oceans/oPersonCenter";
export default {
  name: "centerInfo",
  data() {
    return {
      // backImg: require("@/xhamy/img/centerBac.png"),
      dataInfo: {
        img: require("@/xhamy/img/person.png"),
        name: "Ocean",
        phone: "18820129123"
      },
      listData: [
        [
          {
            name: "我的钱包",
            icon: require("@/xhamy/img/i_c1.png"),
            url: "moneyPakage"
          },
          {
            name: "我的优惠券",
            icon: require("@/xhamy/img/i_c2.png"),
            url: "coupon"
          }
        ],
        [
          {
            name: "预约订单",
            icon: require("@/xhamy/img/i_c3.png"),
            url: "bookingOrder"
          },
          {
            name: "订单信息",
            icon: require("@/xhamy/img/i_c4.png"),
            url: "orderList"
          }
        ],
        [
          {
            name: "消息列表",
            icon: require("@/xhamy/img/i_c5.png"),
            url: "infomation"
          }
        ],
        [
          {
            name: "我要报障",
            icon: require("@/xhamy/img/i_c6.png"),
            url: "reporting"
          },
          {
            name: "关于我们",
            icon: require("@/xhamy/img/i_c7.png"),
            url: "aboutUs"
          }
        ]
      ]
    };
  },

  components: {
    oCenter
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
