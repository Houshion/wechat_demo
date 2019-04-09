<!-- oRefresh -->
<template>
    <div id="oRefresh">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <slot></slot>
            </van-list>
        </van-pull-refresh>
    </div>
</template>
<script>
export default {
    name: 'oRefresh',
    data() {
        return {
            isLoading: false,
            loading: false,
            finished: false
        };
    },
    components: {},
    computed: {},
    created() {
        const _this = this
    },
    methods: {
        onRefresh() {
            // this.$emit("refresh")
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false
            }, 500);
        },
        onLoad() {
            this.$emit("onLoad")
            // 异步更新数据
        },
    }
};
</script>
<style scoped lang='less'>
</style>