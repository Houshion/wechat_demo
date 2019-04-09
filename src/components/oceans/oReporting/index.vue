<template>
  <div id="oReporting">
    <div class="question boxShadow pd-15 mg-b-15 radius10">
      <div class="flex flexStart mg-b-15 title">
        <img src="@/xhamy/img/i_question.png">
        <div>选择问题类型</div>
      </div>
      <div class="border-b wd-80 mg-auto"></div>
      <div class="flex flexStart quesItem">
        <o-button
          class="item"
          :color="item.status?'':'cfff'"
          v-for="(item,index) in question"
          :key="index"
          @btnClick="changeQuestion(index)"
        >{{item.name}}</o-button>
        <!-- <div class="item box">二维码</div>
        <div class="item box selected">二维码</div>
        <div class="item box">二维码</div>
        <div class="item box">二维码</div>
        <div class="item box">二维码</div>
        <div class="item box">二维码</div>
        <div class="item box">二维码</div>
        <div class="item box">二维码</div>
        <div class="item box">二维码</div>
        <div class="item box">二维码</div>-->
      </div>
    </div>
    <div class="update boxShadow pd-15 mg-b-15 radius10">
      <div class="flex flexStart title">
        <div class="img">
          <img src="@/xhamy/img/i_plus.png">
        </div>
        <van-field v-model="message" type="textarea" placeholder="问题补充描述" rows="4" autosize/>
      </div>
      <div class="content tal">
        <van-uploader :after-read="onRead" multiple>
          <van-icon name="photograph" class="updateIcon"/>
        </van-uploader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oReporting",
  props: {
    question: Array
  },
  data() {
    return {
      message: "",
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
    onRead(e) {
      let file = e.file;
      let param = new FormData(); // 创建form对象
      console.log(file.file);

      param.append("api_name", "upload_img");
      param.append("img", file, file.name); // 通过append向form对象添加数据
      console.log(param.get("img")); // FormData私有类对象，访问不到，可以通过get判断值是否传进去

      let data = {
        url: "http://mtzhll.shmtshiye.com/Wxsite/User/api",
        param: param
      }

      this.base.update(data, e, res => {
        console.log(res)
      })
    },
    changeQuestion(index) {
      this.question.forEach(item => {
        item.status = false
      });
      this.question[index].status = true;
      this.$emit("getQuestion", this.question[index])
    }
  }
};
</script>
<style lang='less' scoped>
#oReporting {
  .question {
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .quesItem {
    width: 90%;
    margin: 0 auto;
    .item {
      color: #999;
      width: 30%;
      min-width: 80px;
      padding: 7px 0;
      border-radius: 5px;
      margin-top: 5px;
      margin: 0 1.5%;
      &:nth-child(3n) {
        // margin-right: 0;
      }
    }
    .selected {
      border: 1px solid #c2a466;
      background: #c2a466;
      color: #ffffff;
    }
  }
  .update {
    .img {
      text-align: left;
      width: 10%;
      img {
        max-width: 20px;
        max-height: 20px;
      }
    }
    .van-cell {
      width: 90%;
      padding: 0;
    }
    .updateIcon {
      padding: 20px;
      border-radius: 10px;
      border: #ccc solid 1px;
    }
  }
}
.mu-raised-button {
  line-height: auto;
}
</style>
