<template>
  <div id="place" class="pd-15">
    <o-list
      :title="item.name"
      :url="{
        name:'agent/place/placeDetail',
        query:{
          id: item.site_id
        }
      }"
      v-for="(item,index) in list"
      :key="index"
    >
      <div class="title tal" slot="title">
        <div class="font16">{{item.name}}</div>
        <div class="c999">编号：{{item.macno}}</div>
      </div>
      <div slot="right" class="h100 box price">
        +
        <span class="font24">{{item.device_turnover|toFixed(2)}}</span>
      </div>
    </o-list>
    <no-data v-if="list.length<=0"></no-data>
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
        api_name: "site_device_list",
        token: this.base.getItem("agentToken"),
      }
    };
  },

  components: { oList },

  created() {
    const _this = this;
    this.axios.post("/wxsite/agent/api", this.form).then(res => {
      _this.hideLoading();
      if (res.code != 1) return _this.toast(res.msg)
      _this.list = res.data.list
    })
  },

  mounted() {
    const _this = this;
  },
  methods: {
    getDetail(id) {
      this.push()
    }
  }
};
</script>
<style lang='less' scoped>
.price {
  color: #88e2e1;
}
</style>
