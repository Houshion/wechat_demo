<template>
  <div id="agentCenter">
    <div class="pd-25 bcross">
      <div class="flex flexAround cfff pd-20 font14">
        <div class="orderNum">
          <div class="font32 mg-b-10 fontb">{{accountData.today_order_num}}</div>
          <div>今日订单数</div>
        </div>
        <div class="orderNum">
          <div
            class="font32 mg-b-10 fontb"
          >{{accountData.device_online_num}}/{{accountData.device_total_num}}</div>
          <div>在线/总台数</div>
        </div>
      </div>
      <div class="flex flexAround cfff font14">
        <div class="orderNum">
          <div class="mg-b-5 fontb">￥{{accountData.today_income}}</div>
          <div>今日收益</div>
        </div>
        <div class="orderNum">
          <div class="mg-b-5 fontb">￥{{accountData.month_income}}</div>
          <div>本月收益</div>
        </div>
        <div class="orderNum">
          <div class="mg-b-5 fontb">￥{{accountData.total_income}}</div>
          <div>累计收益</div>
        </div>
      </div>
    </div>
    <div class="btnFun flex flexWrap flexStart mg-t-15">
      <div class="type boxShadow radius10 border" v-for="(item,index) in dataType" :key="index">
        <router-link :to="{ path: item.url}">
          <img :src="item.icon">
          <div class="c999">{{item.title}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { baseUrl } from "@/config.js";
import { data } from "./script"
export default {
  name: "agentCenter",
  data() {
    return {
      dataType: data,
      accountData: {
        device_online_num: 0,
        device_total_num: 0,
        month_income: 0,
        today_income: 0,
        today_order_num: 0,
        total_income: 0,
      }
    };
  },

  components: {},

  created() {
    const _this = this;
    this.init()
  },

  mounted() {
    const _this = this;
  },
  methods: {
    init() {
      const _this = this;
      this.axios.post("/wxsite/agent/api", {
        api_name: "get_operate_data",
        token: this.base.getItem("agentToken")
      }).then(res => {
        _this.hideLoading();
        if (res.code != 1) return _this.toast(res.msg)
        _this.accountData = res.data
      })
    },
  }
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
