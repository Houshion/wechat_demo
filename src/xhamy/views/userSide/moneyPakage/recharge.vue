<template>
  <div id="recharge" class="pd-15">
    <div class="taocan">
      <div class="title">充值套餐</div>
      <div class="flex flexWrap flexBetween">
        <o-button
          :color="item.checked?'cmain':'#ccc'"
          class="wd-45 mg-t-15"
          v-for="(item,index) in tcList"
          :key="index"
          @btnClick="checkType(index)"
        >￥{{item.price|toFixed(2)}}</o-button>
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
    return {
      tcList: [
        { price: 100, id: 1, checked: true },
        { price: 200, id: 2, checked: false },
        { price: 300, id: 3, checked: false },
        { price: 400, id: 4, checked: false },
      ]
    };
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
    },
    checkType(index) {
      const _this = this;
      console.log()
      _this.tcList.forEach(item => {
        item.checked = false;
      });
      _this.tcList[index].checked = true;
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
