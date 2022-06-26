<template>
  <div class="box">
    <Contact />
  </div>
</template>

<script>
import Contact from "./Contact.vue";
export default {
  components: {
    Contact,
  },
};
</script>

<style scoped lang="less">
.box {
  width: 250px;
  height: 600px;
  background: #000;
  margin: 50px auto;
  position: relative;
}
</style>