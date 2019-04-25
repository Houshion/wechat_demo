<template>
  <div id="orderList" class="v100">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="v100">
      <van-list
        :offset="50"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell-group>
          <van-cell
            class="tal"
            v-for="item in orderList"
            :key="item.id"
            :title="item.name?item.name:'提现到银行'"
            :label="(item.ctime || item.retime)"
          >
            <div
              class="font24 h100 flex flexEnd flexVcenter c000"
            >-￥{{(item.price||item.money) | toFixed(2)}}</div>
          </van-cell>
        </van-cell-group>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "orderList",
  props: {
    orderList: Array
  },
  data() {
    return {
      isLoading: false,
      loading: false,
      finished: false
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
    onRefresh() {
      setTimeout(() => {
        this.toast('刷新成功');
        this.isLoading = false
      }, 500);
    },
    onLoad() {
      this.$emit("onLoad")
      // 异步更新数据
      // setTimeout(() => {
      //   // 加载状态结束
      //   this.loading = false;
      // }, 500);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
