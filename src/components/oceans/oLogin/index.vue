<template>
  <div id="oLogin">
    <div class="headerImg pd-tb-35">
      <div class="img box mg-auto bfff">
        <img src="@/xhamy/img/logo.jpg" alt="">
      </div>
    </div>
    <div class="loginBox pd-15">
      <van-cell-group class="tal">
        <van-field
          clearable
          v-model="boxMsg.username.value"
          placeholder="请输入用户名"
          :label="boxMsg.username.label"
          :error-message="error.user"
        >
          <img
            :src="boxMsg.username.icon"
            class="leftIcon"
            slot="left-icon"
            v-if="boxMsg.username.icon"
          >
        </van-field>
        <van-field
          v-if="boxMsg.sms"
          v-model="boxMsg.sms.value"
          left
          clearable
          placeholder="请输入短信验证码"
          :label="boxMsg.sms.label"
        >
          <van-icon
            :name="boxMsg.sms.icon"
            class="leftIcon"
            slot="left-icon"
            v-if="boxMsg.sms.icon"
          />
          <!-- <van-button slot="button" size="small" type="primary">发送验证码</van-button> -->
          <o-button slot="button" @btnClick="sendCode">发送验证码</o-button>
        </van-field>
        <van-field
          clearable
          :type="passShow?'text':'password'"
          v-model="boxMsg.password.value"
          placeholder="请输入密码"
          :label="boxMsg.password.label"
          :error-message="error.pass"
          @click-right-icon="passShow = !passShow;"
        >
          <img
            :src="boxMsg.password.icon"
            class="leftIcon"
            slot="left-icon"
            v-if="boxMsg.password.icon"
          >
          <van-icon name="eye-o" slot="right-icon" v-if="passShow"/>
          <van-icon name="closed-eye" slot="right-icon" v-else/>
        </van-field>
      </van-cell-group>
    </div>
    <o-button class="wd-90 mg-auto mg-tb-30" @btnClick="login">登录</o-button>
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
<style lang='less' scoped>
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
  .van-cell {
    background: #ebedf0;
    &:not(:last-child)::after {
      border-color: #999;
      right: 15px;
    }
  }
  .leftIcon {
    width: 24px;
    display: block;
  }
}
</style>
