<!-- noData -->
<template>
    <div id="noData">
        <img src="@/assets/img/nodata-search.png" alt="">
        <div class="tac">{{text}}</div>
    </div>
</template>
<script>
export default {
    name: 'noData',
    props: {
        text: {
            type: String,
            default: "--暂无数据--"
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
</style>