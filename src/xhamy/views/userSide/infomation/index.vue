<template>
  <div id="infomation" class="pd-15">
    <o-swipe-cell class="radius10" :data="dataList" @onClose="close" @detail="detail"></o-swipe-cell>
  </div>
</template>

<script>
import oSwipeCell from "@/components/oceans/oSwipeCell";
export default {
  name: "infomation",
  data() {
    return {
      dataList: [
      ],
      deleteForm: {
        api_name: "messageDel",
        message_id: 0
      }
    };
  },

  components: { oSwipeCell },

  created() {
    this.init()
  },

  mounted() {
    const _this = this;
  },

  methods: {
    init() {
      const _this = this;
      this.axios.post("/Wxsite/User/api", { api_name: "messageList" }).then(res => {
        _this.hideLoading();
        if (res.code != 1) return _this.toast(res.msg)
        _this.dataList = res.data.list
      })
    },
    close(res) {
      const _this = this
      this.confirm({
        title: "注意", // 标题
        content: "确定删除吗？", // 内容
        leftBtn: "取消", // 左边按钮
        rightBtn: "删除", // 右边按钮
        confirm: () => {
          // 又按钮事件
          this.deleteForm.message_id = res.id
          this.axios.post("/Wxsite/User/api", this.deleteForm).then(res => {
            _this.hideLoading();
            if (res.code != 1) return _this.toast(res.msg)
            _this.init()
          })
        },
        cancel: () => {
          // 左按钮事件
        }
      });
    },
    detail(res) {
      this.$router.push({
        name: "infomationDetail",
        query: {
          id: res.id
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
