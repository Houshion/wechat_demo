<template>
  <div id="oButton">
    <mu-button
      @click="btnClick"
      v-if="color=='cmain'"
      :to="to"
      class="mainBorder wd-100 radius5 cmain"
    >
      <slot></slot>
    </mu-button>
    <mu-button
      @click="btnClick"
      v-else-if="!color"
      :color="'#c2a466'"
      :style="'border-color:'+color"
      :to="to"
      class="wd-100 radius5"
    >
      <slot></slot>
    </mu-button>
    <mu-button
      @click="btnClick"
      v-else
      :style="'border:1px solid '+color+';color:'+color"
      :to="to"
      class="wd-100 radius5"
    >
      <slot></slot>
    </mu-button>
  </div>
</template>

<script>
export default {
  name: "oButton",
  props: {
    color: String,
    to: String / Object
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
  methods: {
    btnClick() {
      this.$emit("btnClick");
    }
  }
};
</script>
<style lang='less' scoped>
</style>
