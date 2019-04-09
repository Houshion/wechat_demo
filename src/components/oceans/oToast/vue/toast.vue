<template>
  <div class="toast" v-if="isShow">
    <div class="toast-div tac">{{ text }}</div>
  </div>
</template>  
  
<script>
export default {
  data() {
    return {
      text: "",
      isShow: true,
      duration: 1500
    };
  }
};
</script>  
  
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.toast {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  padding: 0 0.2rem;
  border-radius: 0.5rem;
  padding: 5px 15px;
  line-height: 30px;
  max-width: 60%;
  word-wrap: break-word;
}
</style>  