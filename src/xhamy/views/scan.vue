<!-- scan -->
<template>
    <div id="scan"></div>
</template>
<script>
export default {
    name: 'scan',
    data() {
        return {};
    },
    components: {},
    computed: {},
    created() {
        const _this = this;
        _this.wechat.getWx(() => {
            _this.wechat.scan(1, res => {
            })
        })
    },
    methods: {
    }
};
</script>
<style scoped lang='less'>
</style>