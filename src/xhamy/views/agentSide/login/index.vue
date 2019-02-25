<template>
  <div id="login">
    <o-login :logo="logo" :boxMsg="boxMsg" @login="login"></o-login>
  </div>
</template>

<script>
import oLogin from "@/components/oceans/oLogin";
export default {
  name: "login",
  data() {
    return {
      logo: require("@/xhamy/img/logo.jpg"),
      boxMsg: {
        username: {
          // placeholder: "请输入用户名",
          error: "用户名错误",
          icon: null,
          label: null,
          value: null
        },
        password: {
          placeholder: "请输入密码",
          error: "密码错误",
          icon: null,
          label: null,
          value: null
        },
        sms: {
          placeholder: "请输入短信验证码",
          icon: null,
          label: null,
          value: null
        }
      }
    };
  },

  components: {
    oLogin
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    login(val) {
      console.log(val);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
