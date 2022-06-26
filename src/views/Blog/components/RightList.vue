// 右边列表组件
<template>
  <ul class="right-list-container">
    <li v-for="item in listData" :key="item.id">
      <span @click="selecting(item)">{{ item.name }}</span>
      <RightList :listData="item.children" @selecting="selecting" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    listData: {
      type: Array,
      //   当默认值是数组或者对象的时候，得写下面这种格式
      default: () => [],
    },
  },
  methods: {
    selecting(item) {
      this.$emit("selecting", item);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/common.less";
.right-list-container {
  .right-list-container {
    padding-left: 40px;
  }
}
</style>