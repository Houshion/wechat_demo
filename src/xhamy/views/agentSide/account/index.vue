<template>
  <div id="account">
    <div class="boxShadow pd-15">
      收入
      <span>￥{{total}}</span>
    </div>
    <div class="pd-15">
      <o-refresh ref="reFresh" @onLoad="onLoad" @refresh="refresh" v-if="list.length>0">
        <o-list ref="olist" v-for="(item,index) in list" :key="index">
          <div class="title tal" slot="title">
            <div class="font16">{{item.name}}</div>
            <div class="c999">编号：{{item.macno}}</div>
          </div>
          <div slot="center" class="tal h100 box">使用次数：{{item.useTime}}</div>
          <div slot="right" class="h100 box price">
            +
            <span class="font24">{{item.price|toFixed(2)}}</span>
          </div>
        </o-list>
      </o-refresh>
      <no-data v-else></no-data>
    </div>
  </div>
</template>

<script>
import oList from "@/components/oceans/oList";
export default {
  name: "account",
  data() {
    return {
      list: [],
      total: 0,
      form: {
        api_name: "income_list",
        page: 0,
        pagesize: 20,
        token: this.base.getItem("agentToken")
      }
    };
  },

  components: { oList },

  created() {
    const _this = this;
    this.init()
  },
  mounted() {
    const _this = this;
  },
  methods: {
    onLoad() {
      this.init()
    },
    refresh() {
      setTimeout(() => {
        this.toast('刷新成功');
        this.$refs.reFresh.isLoading = false
      }, 500);
    },
    init() {
      const _this = this;
      this.form.page++
      this.axios.post("/wxsite/agent/api", this.form).then(res => {
        _this.hideLoading();
        if (res.code != 1) return _this.toast(res.msg)
        _this.list = [..._this.list, ...res.data.list];
        _this.total = res.data.total_income;
        if (res.data.length < 20) {
          setTimeout(() => {
            this.$refs.reFresh.finished = true
            this.$refs.reFresh.loading = false
          }, 1000);
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
.price {
  color: #88e2e1;
}
</style>
