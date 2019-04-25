<template>
  <div id="place" class="pd-15">
    <o-refresh ref="reFresh" @onLoad="onLoad" @refresh="refresh" v-if="list.length>0">
      <o-list
        :title="item.name"
        v-for="(item,index) in list"
        :key="index"
        :url="{
            name: 'agent/device/deviceDetail',
            query: {
              macno: item.macno
            }
          }"
      >
        <div class="title tal" slot="title">
          <div class="font16">{{item.title}}</div>
          <div class="c999">编号：{{item.macno}}</div>
        </div>
        <div slot="right" class="h100 box price">
          <span
            class="font24"
            :class="item.status==1?'free':item.status==(2||3||5)?'using':'stop'"
          >{{item.status==1?"空闲":item.status==(2||3||5)?"使用中":item.status==4?"故障":"离线"}}</span>
        </div>
      </o-list>
    </o-refresh>
    <no-data v-else></no-data>
  </div>
</template>

<script>
export default {
  name: "place",
  data() {
    return {
      list: [],
      form: {
        api_name: "my_device",
        page: 0,
        pagesize: 20,
        token: this.base.getItem("agentToken")
      }
    };
  },

  components: {
  },

  created() {
    const _this = this;

    console.log(this.$refs);

    this.init()
  },

  mounted() {
    const _this = this;
  },
  methods: {
    onLoad() {
      const _this = this
      this.init()
    },
    refresh() {
      setTimeout(() => {
        this.$refs.reFresh.isLoading = false
        this.toast('刷新成功');
      }, 500);
    },
    init() {
      const _this = this
      this.form.page++
      this.axios.post("/wxsite/agent/api", this.form).then(res => {
        _this.hideLoading();
        if (res.code != 1) return _this.toast(res.msg)
        _this.list = [..._this.list, ...res.data];
        if (res.data.length < 20) {
          setTimeout(() => {
            this.$refs.reFresh.finished = true
            this.$refs.reFresh.loading = false
          }, 1000);
        }
      })
    },
    getDetail(macno) {
      this.$router.push({
        name: "agent/device/deviceDetail",
        query: {
          macno: macno
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
.free {
  color: #88e2e1;
}
.using {
  color: #f4ce7d;
}
.stop {
  color: #999999;
}
</style>
