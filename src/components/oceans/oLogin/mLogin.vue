<template>
  <div id="oLogin">
    <div class="headerImg pd-tb-35">
      <div class="img box mg-auto bfff">
        <img :src="logo" alt>
      </div>
    </div>
    <div class="loginBox pd-15">
      <mu-text-field
        v-model="boxMsg.username.value"
        :label="boxMsg.username.placeholder"
        label-float
        :help-text="error.user"
        icon="account_circle"
      ></mu-text-field>
      <br>
      <mu-text-field
        :type="passShow?'text':'password'"
        v-model="boxMsg.password.value"
        :label="boxMsg.password.placeholder"
        :action-click="() => (passShow = !passShow)"
        :action-icon="passShow?'visibility':'visibility_off'"
        label-float
        :error-text="error.pass"
        icon="locked"
      ></mu-text-field>
      <br>
    </div>
    <o-button class="wd-90 mg-auto mg-tb-30" @btnClick="login">登录</o-button>
    <o-bottom-nav></o-bottom-nav>
  </div>
</template>

<script>
export default {
  name: "oLogin",
  props: {
    error: {
      type: Object,
      default: () => ({ user: null, pass: null })
    },
    boxMsg: {
      type: Object,
      default: () => ({
        username: {
          placeholder: {
            type: String,
            default: "请输入用户名"
          },
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
      })
    },
    logo: {
      type: String,
      defalut: require("@/assets/logo.png")
    }
  },
  data() {
    return {
      passShow: false
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    sendCode() {
      console.log("发送验证码");
    },
    login() {
      this.$emit("login", this.boxMsg);
    },
    showPassword() {
      this.passShow = !this.passShow;
    }
  }
};
</script>
<style lang='less'>
.headerImg {
  .img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #ccc;
    padding: 15px;
    img {
      width: 100%;
    }
  }
}
.loginBox {
  border-radius: 10px;
  .mu-input.has-icon {
    padding-left: 36px;
    width: 95%;
    font-size: 24px !important;
    i {
      left: 0;
      font-size: 24px !important;
    }
    .mu-input-content {
      width: 300px;
    }
  }
  .mu-input-icon {
    left: 0px;
  }
  i.material-icons {
    font-size: 24px !important;
  }
}
</style>
