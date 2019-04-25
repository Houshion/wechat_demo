<template>
  <div id="centerInfo">
    <!-- 可添加backImg参数，用于修改背景图片 -->
    <o-center :headImg="dataInfo.img" :listData="listData">
      <div slot="info" class="cfff">
        <div class="name">{{dataInfo.name}}</div>
        <div class="phone">{{dataInfo.phone}}</div>
      </div>
    </o-center>
  </div>
</template>

<script>
import { data } from "./script"
export default {
  name: "centerInfo",
  data() {
    return {
      // backImg: require("@/xhamy/img/centerBac.png"),
      dataInfo: {
        img: '',
        name: '',
        phone: ''
      },
      listData: data
    };
  },

  created() {
    const _this = this;
    this.init();
  },

  mounted() {
    const _this = this;
  },

  methods: {
    init() {
      const _this = this;
      this.axios.post("/wxsite/user/api", { api_name: "user_info" }).then(res => {
        _this.hideLoading()
        if (res.code == 1) {
          console.log(1);
          _this.tool.userMsg = res.data
          _this.dataInfo = {
            img: res.data.head_img,
            name: res.data.nickname,
            phone: res.data.mobile
          };
        } else {
          _this.toast(res.msg)
        }
      })
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
