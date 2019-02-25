<template>
  <div id="list">
    <van-cell-group>
      <van-cell class="tal boxShadow mg-b-10 radius10" :to="url">
        <div slot="title" class="tal">
          <slot name="title"></slot>
        </div>
        <slot></slot>
        <div slot="right-icon" class="h100">
          <slot name="right"></slot>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    url: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>
