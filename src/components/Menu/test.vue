<template>
  <div class="box">
    <Menu />
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<style scoped lang="less">
.box {
  width: 400px;
  height: 600px;
  margin: 50px auto;
  background: #000;
}
</style>