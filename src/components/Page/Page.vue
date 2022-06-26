// 分页组件模块
<template>
  <div class="page-container" v-show="this.maxPage > 1">
    <a @click="changeCurrentPage(1)" :class="{ disabled: current === 1 }"
      >首页</a
    >
    <a
      :class="{ disabled: current === 1 }"
      @click="changeCurrentPage(current - 1)"
      >上一页</a
    >
    <a
      v-for="i in this.getNum()"
      :key="i"
      :class="{ active: i === current }"
      @click="changeCurrentPage(i)"
      >{{ i }}</a
    >
    <a
      :class="{ disabled: current === this.maxPage }"
      @click="changeCurrentPage(current + 1)"
      >下一页</a
    >
    <a
      :class="{ disabled: current === this.maxPage }"
      @click="changeCurrentPage(maxPage)"
      >尾页</a
    >
  </div>
</template>

<script>
export default {
  // 属性
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  // 通过别人传入的数据来计算出相应的属性
  computed: {
    // 显示最小的分页数
    visibleMinPage() {
      let num = this.current - Math.floor(this.visibleNumber / 2);
      if (num < 1) {
        num = 1;
      }
      return num;
    },
    // 显示最大的分页数
    visibleMaxPage() {
      let num = this.visibleMinPage + this.visibleNumber - 1;
      if (num > this.maxPage) {
        num = this.maxPage;
      }
      return num;
    },
    // 最大的分页数
    maxPage() {
      return Math.ceil(this.total / this.limit);
    },
  },
  methods: {
    // 获取最小到最大的分页数
    getNum() {
      const arr = [];
      // let min = this.visibleMinPage;
      // let max = this.visibleMaxPage;
      // if (min < 1) {
      //   min = 1;
      // }
      // if (max > this.maxPage) {
      //   max = this.maxPage;
      // }
      // console.log(this.total);
      for (let i = this.visibleMinPage; i <= this.visibleMaxPage; i++) {
        arr.push(i);
      }
      // console.log(arr);
      return arr;
    },
    // 改变当前页码
    changeCurrentPage(page) {
      if (page < 1) {
        page = 1;
      }
      if (page > this.maxPage) {
        page = this.maxPage;
      }
      if (page === this.current) {
        return;
      }
      // console.log(page);
      this.$emit("changeCurrentPage", page);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.page-container {
  display: flex;
  justify-content: center;
  a {
    color: @primary;
    margin: 0 7px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      cursor: text;
    }
  }
}
</style>