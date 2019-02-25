<template>
  <div id="recharge" class="pd-15">
    <div class="taocan">
      <div class="title">充值套餐</div>
      <div class="flex flexWrap flexBetween">
        <o-button color="cmain" class="wd-45 mg-t-15">￥100.00</o-button>
        <o-button color="#ccc" class="wd-45 mg-t-15">￥100.00</o-button>
        <o-button color="#ccc" class="wd-45 mg-t-15">￥100.00</o-button>
        <o-button color="#ccc" class="wd-45 mg-t-15">￥100.00</o-button>
      </div>
      <div class="pay mg-tb-15 border-b tal">
        <div class="title pd-tb-15">支付方式</div>
        <van-cell title="微信支付" clickable>
          <div slot="icon" class="iconImg box payIcon">
            <img src="@/xhamy/img/i_wxpay.png" class="wd-100 mg-r-10 mg-l-15">
          </div>
        </van-cell>
      </div>
      <o-button class="wd-90 mg-auto" @btnClick="pay">支付</o-button>
    </div>
  </div>
</template>

<script>
import Toast from "vant";
export default {
  name: "recharge",
  data() {
    return {};
  },

  components: { Toast },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    pay() {
      Toast("提示内容");
    }
  }
};
</script>
<style lang='less' scoped>
.title {
  text-align: left;
  font-weight: bold;
}
.iconImg {
  img {
    display: block;
    width: 25px;
  }
}
</style>
