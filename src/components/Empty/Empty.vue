// 显示数据为空的组件
<template>
  <div class="empty-container" v-if="text === '无数据'">
    <Iconfont className="empty" />
    {{ text }}
  </div>
</template>

<script>
// 导入 Iconfont 组件模块
import Iconfont from "../Iconfont/Iconfont.vue";

export default {
  components: { Iconfont },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
    components: {
      Iconfont,
    },
  },
};
</script>

<style scoped lang='less'>
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.empty-container {
  .self-center();
  font-size: inherit;
  color: @gray;
  .iconfont-container {
    display: block;
    font-size: inherit;
    text-align: center;
  }
}
</style>