<!-- using -->
<template>
    <div id="using">
        <img src="@/assets/img/dataTip.png" alt="">
        <div class="tac">{{text}}</div>
    </div>
</template>
<script>
export default {
    name: 'using',
    props: {
        text: {
            type: String,
            default: "--设备使用中--"
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
  padding: 30px;
}
</style>