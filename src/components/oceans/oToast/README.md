#用法
>> toast
` this.$toast("顶部显示", "top");
` this.$toast("默认底部显示");
` this.$toast("中间显示", "middle");
` this.$toast("带倒计时5秒自动关闭", "", 5000);

>> alert
` this.$alert("标题1111", "内容1111");
` this.$alert("标题1111", "内容1111", () => {
    // 确认返回事件
  });
` this.$alert({
    title: "ceshiTitle",
    content: "测试1",
    confirm: () => {
      // 确认返回事件
    }
  });

>> xToast
` this.$xToast("success", "success");
` this.$xToast("fail", "fail");
` this.$xToast(require("../assets/logo.png"), "自定义");

>> confirm
` this.$confirm("标题1", "内容11111111");
` this.$confirm("请输入名字", "name");
` this.$confirm("请输入手机号码", "phone");
` this.$confirm({
    title: "标题1", // 标题
    content: "内容11111111", // 内容
    leftBtn: "不要", // 左边按钮
    rightBtn: "来吧", // 右边按钮
    confirm: () => { 
      // 又按钮事件
    },
    cancel: () => { 
      // 左按钮事件
    }
  });