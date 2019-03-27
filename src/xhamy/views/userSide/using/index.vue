<!-- using -->
<template>
    <div id="using" class="vh100">
        <o-countDown :title="title" :time="time" to="indexMap"></o-countDown>
        <div class="bottom">
            <img src="@/xhamy/img/wave.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'using',
    data() {
        return {
            time: 3000,
            title: "合适放松"
        };
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
<style scoped lang="less">
#using {
  #countDown {
    height: 80vh;
  }
  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0;
    img {
      width: 100%;
      display: bolc;
    }
  }
}
</style>