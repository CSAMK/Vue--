<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <template>
        <RouterView />
        <!-- <h2>主内容</h2> -->
      </template>
    </Layout>
  </div>
</template>

<script>
// 引入页面布局组件模块
import Layout from "@/components/Layout/Layout.vue";

// 引入侧边栏组件模块
import SiteAside from "@/components/SiteAside/SiteAside.vue";

export default {
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/common.less";
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";

.left {
  width: 220px;
  height: 100vh;
  background: @dark;
}
</style>