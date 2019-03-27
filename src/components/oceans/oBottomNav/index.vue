<template>
  <div id="oBottomNav">
    <mu-container>
      <mu-bottom-nav :value.sync="shift" shift>
        <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "oBottomNav",
  props: {},
  data() {
    return {
      shift: "movies"
    };
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
<style lang='less'>
@import "../../../assets/css/o_color.less";
#oBottomNav {
  position: fixed;
  bottom: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  .container {
    padding: 0;
    .mu-bottom-nav-shift {
      background: @baseColor;
      .material-icons {
        font-size: 24px !important;
      }
    }
  }
}
</style>