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
export default {
  name: "centerInfo",
  data() {
    return {
      // backImg: require("@/xhamy/img/centerBac.png"),
      dataInfo: {
        img: '',
        name: '',
        phone: ''
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

  created() {
    const _this = this;
    this.init();
  },

  mounted() {
    const _this = this;
  },

  methods: {
    init() {
      const _this = this;
      this.axios.post("/wxsite/user/api", { api_name: "user_info" }).then(res => {
        if (res.code == 1) {
          console.log(1);
          _this.tool.userMsg = res.data
          _this.dataInfo = {
            img: res.data.head_img,
            name: res.data.nickname,
            phone: res.data.mobile
          };
        } else {
          _thsi.$toast(res.msg)
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
