<template>
  <div class="box">
    <Empty :text="text" />
  </div>
</template>

<script>
import Empty from "./Empty.vue";

export default {
  components: {
    Empty,
  },
  data() {
    return {
      // text: "无数据",
    };
  },
};
</script>

<style lang="less" soped>
.box {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #f40;
  font-size: 3rem;
}
</style>