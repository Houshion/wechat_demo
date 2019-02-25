<template>
  <div id="oPayWay">
    <van-cell-group>
      <van-cell title="选择支付方式">
        <div slot="icon" class="iconImg box">
          <img src="@/xhamy/img/i_pay.png" class="wd-100 mg-r-10">
        </div>
        <div>
          需支付
          <span class="cmoney font18">15</span>
          元
        </div>
      </van-cell>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell
            :title="item.name"
            clickable
            @click="radio=index"
            v-for="(item,index) in payWay"
            :key="index"
          >
            <div slot="icon" class="iconImg box payIcon">
              <img :src="item.icon" class="wd-100 mg-r-10 mg-l-15">
            </div>
            <van-radio :name="index">
              <img
                slot="icon"
                slot-scope="props"
                :src="props.checked ? icon.active : icon.normal"
                class="radioIcon"
              >
            </van-radio>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "oPayWay",
  data() {
    return {
      payWay: [
        {
          name: "微信支付",
          icon: require("@/xhamy/img/i_wxpay.png"),
          status: true
        },
        {
          name: "余额支付",
          icon: require("@/xhamy/img/i_yuepay.png"),
          status: false
        }
      ],
      icon: {
        normal: require("@/xhamy/img/unpick.png"),
        active: require("@/xhamy/img/pick.png")
      },
      radio: 0
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
@import "./style.less";
</style>
