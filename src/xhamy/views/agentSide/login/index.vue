<template>
  <div id="login">
    <!-- <m-login :logo="logo" :boxMsg="boxMsg" @login="login"></m-login> -->
    <o-login :logo="logo" :boxMsg="boxMsg" @login="login"></o-login>
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
          // label: "账号",
          icon: require('@/xhamy/img/icon_current.png'),
          value: null
        },
        password: {
          placeholder: "请输入密码",
          // label: "密码",
          icon: require('@/xhamy/img/icon_lock.png'),
          value: null
        },
        // sms: {
        //   placeholder: "请输入短信验证码",
        //   label: null,
        //   value: null
        // }
      },
      form: {
        api_name: 'login',
        account: '',
        password: '',
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
    login(val) {
      console.log(val)
      const _this = this;
      this.form.account = val.username.value
      this.form.password = val.password.value
      this.axios.post("/wxsite/agent/api", this.form).then(res => {
        _this.$hideLoading();
        _this.$toast(res.msg);
        if (res.code == 1)
          _this.base.setItem("agentToken",res.data.token)
          setTimeout(() => {
            _this.$router.replace({
              name: 'agent/agentCenter'
            })
          }, 1500);
      })
    }
  }
};
</script>
<style lang='less'>
</style>
