<template>
  <div class="box">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./SiteAside.vue";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style scoped lang="less">
.box {
  width: 230px;
  height: 600px;
  background: #000;
  margin: 50px auto;
}
</style>