<template>
  <div id="oPayWay">
    <van-cell-group>
      <van-cell title="选择支付方式">
        <div slot="icon" class="iconImg box">
          <img src="@/xhamy/img/i_pay.png" class="wd-100 mg-r-10">
        </div>
        <div>
          需支付
          <span class="cmoney font18">{{price}}</span>
          元
        </div>
      </van-cell>
      <van-radio-group v-model="radio" @change="changeWay">
        <van-cell-group>
          <van-cell
            :title="item.name"
            clickable
            @click="radio=index"
            v-for="(item,index) in payWay.way"
            :key="index"
          >
            <div slot="icon" class="iconImg box payIcon">
              <img :src="item.icon" class="wd-100 mg-r-10 mg-l-15">
            </div>
            <van-radio :name="index">
              <img
                slot="icon"
                slot-scope="props"
                :src="props.checked ? payWay.icon.active : payWay.icon.normal"
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
  props: {
    price: {
      type: Number,
      default: 0
    },
    payWay: {
      type: Object,
      default: () => ({
        way: [
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
      })
    }
  },
  data() {
    return {
      radio: 0
    };
  },

  components: {},

  created() {
    const _this = this;
    console.log(_this)
  },

  mounted() {
    const _this = this;
  },
  methods: {
    changeWay(val) {
      this.$emit("getPayWay", val)
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
