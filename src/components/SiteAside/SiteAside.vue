// 侧边栏组件
<template>
  <div class="siteaside-container">
    <Portrait
      url="https://tse3-mm.cn.bing.net/th/id/OIP-C.U72LYMKCgWGVQKIDzDG7SwHaHI?w=203&h=195&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    />
    <h1>First Vue</h1>
    <Menu />
    <Contact />
    <span>制作人：郑奋</span>
  </div>
</template>

<script>
import Portrait from "@/components/Portrait/Portrait.vue";
import Contact from "@/components/Contact/Contact.vue";
import Menu from "@/components/Menu/Menu.vue";

export default {
  components: {
    Portrait,
    Contact,
    Menu,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/common.less";
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";

.siteaside-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  overflow: auto;
  .portrait-container {
    margin: 20px auto;
  }
  h1 {
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
    font-size: 18px;
  }
  .contact-container {
    margin-top: 20px;
  }
  span {
    display: block;
    color: @lightWords;
    text-align: center;
    font-size: 12px;
  }
}
</style>