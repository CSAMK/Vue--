<template>
  <div class="box">
    <Layout>
      <template #left>
        <div class="left">左边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
      <div class="middle">
        主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏主区域，宽度占满剩余空间，溢出隐藏
      </div>
      <template #right>
        <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./Layout.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.box {
  width: 500px;
  height: 500px;
  outline: 1px solid #f40;
  margin: 50px auto;
  .left {
    width: 200px;
    height: 100%;
    background: #f40;
  }
  .middle {
    white-space: nowrap;
  }
  .right {
    width: 100px;
    height: 100%;
    background: blue;
  }
}
</style>