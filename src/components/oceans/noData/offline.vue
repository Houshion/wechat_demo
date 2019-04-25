<!-- offline -->
<template>
    <div id="offline">
        <img src="@/assets/img/offline.png" alt="">
        <div class="tac">{{text}}</div>
    </div>
</template>
<script>
export default {
    name: 'offline',
    props: {
        text: {
            type: String,
            default: "--设备离线--"
        }
    },
    data() {
        return {};
    },
    components: {},
    computed: {},
    created() {
        const _this = this
    },
    methods: {
    }
};
</script>
<style scoped lang='less'>
img {
  width: 50%;
  padding: 30px 10px;
}
</style>