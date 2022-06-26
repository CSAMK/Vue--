// 该组件可以实现一个渐进式图片
<template>
  <div class="imageLoader-container">
    <img
      :src="placeholder"
      alt=""
      :style="{ filter: 'blur(2px)' }"
      v-if="!everything"
    />
    <img
      :src="src"
      @load="visibleImg"
      :style="{ opacity: visibleImgShow, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      // 原图是否可见
      visible: false,
      // 原图是否已经完全显性出来了
      everything: false,
    };
  },
  computed: {
    visibleImgShow() {
      return this.visible ? 1 : 0;
    },
  },
  methods: {
    // 当图片加载完成后就执行这个函数
    visibleImg() {
      // 将原图弄成可见
      this.visible = true;
      setTimeout(() => {
        this.everything = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixins.less";
.imageLoader-container {
  .fill(relative);
  img {
    .fill();
    object-fit: cover;
  }
}
</style>