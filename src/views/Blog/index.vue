// 文章页面组件
<template>
  <h2>blog</h2>
</template>

<script>
// 导入关于 blog 的数据接口
import * as API from "@/api/api-blog.js";
export default {
  data() {
    return {
      // 获取所有的博客分类
      blogType: [],
      // 分页获取博客
      blog: [],
    };
  },
  async mounted() {
    console.log(API);

    this.blogType = await API.getBlogType();
    // console.log(this.blogType);
    this.blog = await API.getBlog();
    console.log(this.blog);
  },
  methods: {
    // async getBlogType() {
    //   const data = await API.getBlogType();
    //   return data;
    // },
  },
};
</script>

<style>
</style>