// 菜单栏组件
<template>
  <div class="menu-container">
    <RouterLink
      v-for="item in items"
      :key="item.name"
      :to="{ name: item.name }"
      :exact="item.exact"
      active-class="active"
      exact-active-class=""
    >
      <Iconfont :className="item.icon" />
      <span>{{ item.title }}</span>
    </RouterLink>
  </div>
</template>

<script>
import Iconfont from "@/components/Iconfont/Iconfont.vue";
export default {
  components: {
    Iconfont,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          // 是否要进行精确匹配
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "~@/styles/common.less";
@import "~@/styles/var.less";

.menu-container {
  color: @gray;
  a {
    display: block;
    // background: red;
    height: 35px;
    line-height: 35px;
    padding-left: 35px;
    &:hover {
      color: #fff;
    }
    &.active {
      color: #fff;
      background: rgba(197, 190, 192, 0.3);
    }
    .iconfont-container {
      margin-right: 10px;
    }
  }
}
</style>