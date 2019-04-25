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
      </div>
    </div>
    <div class="update boxShadow pd-15 mg-b-15 radius10">
      <div class="flex flexStart title">
        <div class="img">
          <img src="@/xhamy/img/i_plus.png">
        </div>
        <van-field v-model="form.content" type="textarea" placeholder="问题补充描述" rows="4" autosize/>
      </div>
      <div class="content tal">
        <van-uploader :after-read="onRead">
          <van-icon name="photograph" class="updateIcon box"/>
          <img :src="showImg" alt="" v-if="showImg">
        </van-uploader>
      </div>
    </div>
    <o-button @btnClick="submit">提交</o-button>
  </div>
</template>

<script>
export default {
  name: "oReporting",
  props: {
    question: Array,
    macno: String
  },
  data() {
    return {
      showImg: null,
      form: {
        api_name: 'feedback',
        type_id: 0,
        content: null,
      },
      formData: null,
      param: new FormData(),
      file: null
    };
  },

  components: {},

  created() {
    const _this = this;
    // let param = new FormData(); // 创建form对象
  },

  mounted() {
    const _this = this;
  },
  methods: {
    onRead(e) {
      const _this = this;
      this.file = e.file;
      this.form.img = e.file;
      this.showImg = e.content;

      this.param.append("img", e.file); // 通过append向form对象添加数据

      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onloadend = function (evt) {
        //console.log(evt.target)
        _this.showImg = e.content;
      };
    },
    changeQuestion(index) {
      this.question.forEach(item => {
        item.status = false
      });
      this.question[index].status = true;
      this.form.type_id = this.question[index].id
      // this.$emit("getQuestion", this.question[index])
    },
    submit() {
      let type
      if (this.file) {
        type = 1;
        this.param.append("api_name", "feedback");
        this.param.append("macno", this.macno); // 通过append向form对象添加数据
        this.param.append("type_id", this.form.type_id); // 通过append向form对象添加数据
        this.param.append("content", this.form.content); // 通过append向form对象添加数据
        this.formData = this.param
      } else {
        type = 2;
        this.form.macno = this.macno
        this.formData = this.form
      }
      this.$emit("submit", this.formData, type)
      console.log(this.formData);
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
    .content {
      .updateIcon {
        width: 26vw;
        height: 26vw;
        border-radius: 10px;
        border: #ccc solid 1px;
        font-size: 2rem !important;
      }
      img {
        position: absolute;
        left: 0;
        width: 26vw;
        height: 26vw;
        top: 0;
      }
    }
  }
}
.mu-raised-button {
  line-height: auto;
}
</style>
