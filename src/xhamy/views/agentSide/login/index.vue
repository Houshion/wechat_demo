<template>
  <div id="login">
    <m-login :logo="logo" :boxMsg="boxMsg" @login="login"></m-login>
    <!-- <o-login :logo="logo" :boxMsg="boxMsg" @login="login"></o-login> -->
  </div>
</template>

<script>
import mLogin from "@/components/oceans/oLogin/mLogin.vue";
export default {
  name: "login",
  data() {
    return {
      logo: require("@/xhamy/img/logo.jpg"),
      boxMsg: {
        username: {
          placeholder: "请输入用户名",
          label: "null",
          value: null
        },
        password: {
          placeholder: "请输入密码",
          label: "null",
          value: null
        },
        sms: {
          placeholder: "请输入短信验证码",
          label: null,
          value: null
        }
      }
    };
  },

  components: {
    mLogin
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    login(val) {}
  }
};
</script>
<style lang='less'>
</style>
