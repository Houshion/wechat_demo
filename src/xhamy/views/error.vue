<!-- error -->
<template>
    <div id="error">
        <offline v-if="status==3||status==5" :text="status==3?'--设备离线--':'--设备故障--'"></offline>
        <using v-else :text="status==1?'--设备使用中--':status==2?'--设备支付中--':'--设备已被预约--'"></using>
    </div>
</template>
<script>
export default {
    name: 'error',
    data() {
        return {
            status: this.$route.query.status
        };
    },
    components: {},
    computed: {},
    created() {
        const _this = this
        console.log(this.$route.query.status)
    },
    methods: {
    }
};
</script>
<style scoped lang='less'>
</style>