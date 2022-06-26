// 字体图标组件
<template>
  <i class="iconfont iconfont-container" :class="setClassName"></i>
</template>

<script>
// 做一个类样式映射
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};

export default {
  props: {
    className: {
      type: String,
      required: true,
    },
  },
  computed: {
    /**
     * 根据传入的别名设置对应的类样式
     * @cname String 别名
     */
    setClassName() {
      //   console.log(classMap[this.className]);
      return classMap[this.className];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
</style>