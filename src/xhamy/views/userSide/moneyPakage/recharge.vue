<template>
  <div id="recharge" class="pd-15">
    <div class="taocan">
      <div class="title">充值套餐</div>
      <div class="flex flexWrap flexBetween">
        <o-button
          :color="item.checked?'cmain':'#ccc'"
          class="mg-t-15"
          style="width:45%"
          v-for="(item,index) in tcList"
          :key="index"
          @btnClick="checkType(item)"
        >{{item.give_money==0?"￥"+item.money:"充"+item.money+"送"+item.give_money}}</o-button>
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
export default {
  name: "recharge",
  data() {
    return {
      tcList: [],
      form: {
        api_name: "recharge",
        id: ""
      }
    };
  },

  created() {
    const _this = this;
    this.axios.post("/wxsite/home/index", { api_name: "get_money_item" }).then(res => {
      _this.hideLoading();
      if (res.code != 1) return _this.toast(res.msg)
      res.data.forEach((item, index) => {
        let checked = Object.assign({}, item, {
          checked: false
        });
        _this.$set(res.data, index, checked);
      });
      _this.tcList = res.data
      console.log(_this.tcList)
    })
  },

  mounted() {
    const _this = this;
  },
  methods: {
    pay() {
      const _this = this
      this.axios.post("/wxsite/user/api", this.form).then(res => {
        _this.hideLoading();
        if (res.code != 1) return _this.toast(res.msg)
        _this.wechat.callpay(res.data, res => {
          console.log(res)
          if (res) {
            _this.toast("支付成功")
          }
        })
      })
      console.log(this.form)
    },
    checkType(item) {
      const _this = this;
      console.log()
      _this.tcList.forEach(item => {
        item.checked = false;
      });
      item.checked = true
      _this.form.id = item.option_id
      // _this.tcList[index].checked = true;
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
