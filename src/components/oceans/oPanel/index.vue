<template>
  <div id="oPanel">
    <mu-container>
      <mu-expansion-panel v-for="(item,index) in panelData" :key="index">
        <div slot="header">{{item.title}}</div>
        {{item.content}}
      </mu-expansion-panel>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "oPanel",
  props: {
    panelData: Array
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
    init() {
      console.log(123456789);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
