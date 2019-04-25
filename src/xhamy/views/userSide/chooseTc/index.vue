<template>
  <div id="chooseTc" class="pd-15">
    <div class="radius10">
      <o-swiper :images="images"></o-swiper>
    </div>
    <div class="choose boxShadow radius10 mg-t-15">
      <div class="deviceMsg pd-b-25">
        <div class="macno pd-tb-25 fontb">设备号：{{form.macno}}</div>
        <div class="cbbb">请选择使用时间</div>
        <div
          class="tcItem flex wd-80 radius5"
          v-for="(item,index) in deviceTc"
          :class="item.selected?'chooseBorder':'mainBorder'"
          :key="index"
          @click="changeTc(index)"
        >
          <div class="tcName cfff wd-40" :class="item.selected?'chooseBack':'bmain'">{{item.name}}</div>
          <div class="time wd-60">{{item.price}}元/{{item.minute}}分钟</div>
        </div>
        <o-button class="wd-80 radius5 mg-50" @btnClick="confirm">确定</o-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chooseTc",
  data() {
    return {
      // 轮播图
      images: [require("@/xhamy/img/banner.png"), require("@/xhamy/img/banner.png")],
      // 设备信息
      deviceTc: [],
      orderTc: {},
      form: {
        api_name: "get_device_pack",
        macno: ''
      },
      item_id: 0
    };
  },

  created() {
    let macno = this.$route.query.macno
    this.tool.macno = macno;
    this.form.macno = macno

    this.getBanner();
    this.getTc();
    this.tool.xhamy.getUser();
  },

  mounted() {
    const _this = this;
  },
  methods: {
    getBanner() {
      const _this = this;
      this.axios.post("/Wxsite/home/index", {
        api_name: "item_banner"
      }).then(res => {
        _this.hideLoading()
        if (res.code == 1) {
          // _this.images = res.data
        } else {
          _this.toast(res.msg)
        }
      });
    },
    getTc() {
      const _this = this;
      this.axios.post("/Wxsite/Device/api", this.form).then(res => {
        _this.hideLoading()
        if (res.code == 1) {
          _this.deviceTc = res.data
          _this.deviceTc.forEach((item, index) => {
            let select = Object.assign({}, item, {
              selected: false
            });
            _this.$set(_this.deviceTc, index, select);
          });
        } else {
          _this.toast(res.msg)
          setTimeout(() => {
            _this.$router.push({ name: "/" })
          }, 2000);
        }
      });
    },
    changeTc(i) {
      this.item_id = this.deviceTc[i].id
      this.deviceTc.forEach(item => {
        item.selected = false
      });
      this.deviceTc[i].selected = true;
      this.orderTc = {
        name: this.deviceTc[i].name,
        rule: this.deviceTc[i].price + '元/' + this.deviceTc[i].minute + '分钟',
        time: this.deviceTc[i].minute,
        price: this.deviceTc[i].price,
      }

      this.tool.xhamy.orderTc = this.orderTc;
    },
    confirm() {
      if (this.item_id == 0) return this.toast("请选择套餐")
      this.$router.push({
        name: "confirmOrder",
        query: {
          id: this.item_id,
          type: 1,
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
#oSwiper {
  max-height: 250px;
  overflow: hidden;
}
</style>
