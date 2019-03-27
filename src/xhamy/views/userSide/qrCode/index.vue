<!-- qrCode -->
<template>
    <div id="qrCode">
        <div class="codeBox">
            <img src="@/xhamy/img/qrCode.jpg" style="width:100%;">
            <div>长按二维码关注公众号</div>
            <div class="cbbb mg-tb-15 font14" @click="close">暂不关注</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'qrCode',
    data() {
        return {};
    },
    components: {},
    computed: {},
    created() {
        const _this = this
    },
    methods: {
        close: () => {
            WeixinJSBridge.call('closeWindow')
        }
    }
};
</script>
<style scoped lang='less' >
#qrCode {
  background: #000000;
  width: 100%;
  height: 100vh;
  padding: 10% 0 15%;
  .codeBox {
    margin: auto;
    width: 90%;
    background: #ffffff;
    border-radius: 10px;
    padding: 40px;
  }
}
</style>