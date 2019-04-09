<template>
  <div id="orderList" class="v100">
    <!-- <van-cell-group>
      <van-cell
        class="tal"
        v-for="item in orderList"
        :key="item.id"
        :title="item.name"
        :label="item.time"
      >
        <div class="font24 h100 flex flexEnd flexVcenter c000">-￥{{item.price | toFixed(2)}}</div>
      </van-cell>
    </van-cell-group>-->
    <o-order-list
      ref="oOrderList"
      :orderList="orderList"
      @onLoad="onLoad"
      v-if="orderList.length>0"
    ></o-order-list>
    <no-data v-else></no-data>
  </div>
</template>

<script>
export default {
  name: "orderList",
  data() {
    return {
      orderList: [],
      form: {
        api_name: "orderList",
        page: 1,
        pagesize: 10
      },
    };
  },

  created() {
    const _this = this;
    this.init(1)
  },

  mounted() {
    const _this = this;
  },
  methods: {
    init(page) {
      const _this = this;
      this.form.page = page
      this.axios.post("/wxsite/user/api", this.form).then(res => {
        _this.$hideLoading()
        // _this.$refs.oOrderList.finished = true
        // _this.$refs.oOrderList.loading = false
        if (res.code == 1) {
          _this.orderList = [..._this.orderList, ...res.data.list]
          if (res.data.list.length < 10) {
            _this.$refs.oOrderList.finished = true
          }
        } else {
          _this.$toast(res.msg)
        }
      });
    },
    onLoad() {
      const _this = this;
      this.form.page++
      setTimeout(() => {
        _this.init(_this.form.page)
        _this.$refs.oOrderList.loading = false
      }, 1000);
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
