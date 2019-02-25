<template>
  <div id="oPicker">
    <van-popup v-model="showProp" position="bottom">
      <van-picker
        show-toolbar
        :columns="pickData"
        :visible-item-count="showCount"
        @cancel="showProp=false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "oPicker",
  props: {
    show: {
      type: Boolean,
      dafault: true
    },
    showCount: {
      type: Number,
      defalut: 5
    },
    pickData: Array
  },
  data() {
    return {
      showProp: this.show
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },

  watch: {
    showProp() {
      const _this = this;
      // _this.oshow = _this.show;
      console.log(_this.showProp);
    }
  },

  methods: {
    onConfirm(value, index) {
      this.show = false;
      this.$emit("confirm", value);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
