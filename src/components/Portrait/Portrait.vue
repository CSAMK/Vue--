// 头像组件
<template>
  <img
    class="portrait-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

// 带有作用域的样式
<style scoped>
.portrait-container {
  border-radius: 50%;
  display: block;
  object-fit: cover;
  margin: 0px auto;
}
</style>