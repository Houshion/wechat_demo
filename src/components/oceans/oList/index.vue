<template>
  <div class="list">
    <van-cell-group>
      <van-cell class="tal boxShadow mg-b-10 radius10" :to="url">
        <div class="flex flexBetween">
          <div slot="title" class="tal">
            <slot name="title"></slot>
          </div>
          <slot name="center"></slot>
          <div slot="right-icon" class="h100">
            <slot name="right"></slot>
          </div>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    url: null
  },
  data() {
    return {
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
  }
};
</script>
<style lang='less' scoped>
</style>
