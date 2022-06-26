// 右边列表组件测试
<template>
  <div class="box">
    <RightList :listData="this.listData" @selecting="setActive" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      listData: [
        {
          id: 1,
          name: "分类1",
          children: [
            {
              id: "1-1",
              name: "分类1-1",
            },
            {
              id: "1-2",
              name: "分类1-2",
            },
            {
              id: "1-3",
              name: "分类1-3",
            },
          ],
        },
        {
          id: 2,
          name: "分类2",
          children: [
            {
              id: "2-1",
              name: "分类2-1",
            },
            {
              id: "2-2",
              name: "分类2-2",
            },
            {
              id: "2-3",
              name: "分类2-3",
              children: [
                {
                  id: "2-3-1",
                  name: "分类2-3-1",
                },
                {
                  id: "2-3-2",
                  name: "分类2-3-2",
                },
                {
                  id: "2-3-3",
                  name: "分类2-3-3",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: "分类3",
          children: [
            {
              id: "3-1",
              name: "分类3-1",
            },
            {
              id: "3-2",
              name: "分类3-2",
              children: [
                {
                  id: "3-2-1",
                  name: "分类3-2-1",
                },
                {
                  id: "3-2-2",
                  name: "分类3-2-2",
                },
                {
                  id: "3-2-3",
                  name: "分类3-2-3",
                },
              ],
            },
            {
              id: "3-3",
              name: "分类3-3",
            },
          ],
        },
      ],
    };
  },
  methods: {
    setActive(el) {
      console.log(el);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/common.less";
@import "~@/styles/var.less";
.box {
  width: 800px;
  height: 700px;
  outline: 2px solid;
  margin: 50px auto;
}
</style>