<template>
  <div id="infomation" class="pd-15">
    <div class="boxShadow radius10">
      <o-swipe-cell class="radius10" @onClose="close" @detail="detail"></o-swipe-cell>
    </div>
  </div>
</template>

<script>
import oSwipeCell from "@/components/oceans/oSwipeCell";
export default {
  name: "infomation",
  data() {
    return {};
  },

  components: { oSwipeCell },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },

  methods: {
    close() {
      console.log(1);
    },
    detail() {
      console.log("detail");
    }
  }
};
</script>
<style lang='less' scoped>
@import "./style.less";
</style>
