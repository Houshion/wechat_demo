<template>
  <div id="place" class="pd-15 v100">
    <o-refresh ref="reFresh" @onLoad="onLoad" v-if="list.length>0">
      <o-list
        :title="item.name"
        v-for="(item,index) in list"
        :key="index"
        :url="{
            name: 'agent/order/orderDetail',
            query: {
              order_id: item.order_id
            }
          }"
      >
        <div class="title tal" slot="title">
          <div class="font16">{{item.title}}</div>
          <div class="c999">编号：{{item.order_no}}</div>
        </div>
        <div slot="right" class="h100 box price">
          +
          <span class="font24">{{item.real_money|toFixed(2)}}</span>
        </div>
      </o-list>
    </o-refresh>
    <no-data v-else></no-data>
  </div>
</template>

<script>
import oList from "@/components/oceans/oList";
export default {
  name: "place",
  data() {
    return {
      list: [],
      form: {
        api_name: "my_order",
        page: 0,
        token: this.base.getItem("agentToken")
      }
    };
  },

  components: {
    oList
  },

  created() {
    const _this = this;
    this.init();
  },

  mounted() {
    const _this = this;
  },
  methods: {
    onLoad() {
      const _this = this
      this.init()
    },
    init() {
      const _this = this;
      this.form.page++
      this.axios.post("/wxsite/agent/api", this.form).then(res => {
        _this.$hideLoading();
        if (res.code != 1) return _this.$toast(res.msg)
        _this.list = [..._this.list, ...res.data];
        if (res.data.length < 10) {
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
