// 首页页面组件
<template>
  <div
    id="home"
    ref="home"
    class="home-container"
    @wheel="wheelHandle"
    v-loading="isLoading"
  >
    <ul
      class="banner"
      ref="banner"
      @transitionend="
        {
          isChanging = false;
        }
      "
    >
      <li
        v-for="item in data"
        :key="item.id"
        ref="item"
        :style="{
          height: homeHeight + 'px',
        }"
      >
        <banner
          :bigImg="item.bigImg"
          :midImg="item.midImg"
          :character="item.character"
          :description="item.description"
        />
      </li>
    </ul>
    <!-- <button @click="show()" class="btn">点我</button> -->
    <!-- 上箭头 -->
    <div class="icon-up" v-show="index >= 1" @click="changeImg(index - 1)">
      <Iconfont className="arrowUp" />
    </div>

    <!-- 下箭头 -->
    <div
      class="icon-down"
      v-show="index < data.length - 1"
      @click="changeImg(index + 1)"
    >
      <Iconfont className="arrowDown" />
    </div>

    <!-- 导航元 -->
    <ul class="nav">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{
          active: i === index,
        }"
        @click="changeImg(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import "@/mock";
// 导入获取 banner 图片的模块
import getBanner from "@/api/api-banner.js";
// 导入 banner 组件模块
import banner from "./banner.vue";
// 导入 Iconfont 组件模块
import Iconfont from "@/components/Iconfont/Iconfont.vue";
// 导入 getData 公共组件模块
import { getData } from "@/mixins";

export default {
  mixins: [getData()],
  components: {
    banner,
    Iconfont,
  },
  data() {
    return {
      // 主页的高度
      homeHeight: 0,
      // 图片的索引
      index: 0,
      // 是否正在切换图片
      isChanging: false,
    };
  },
  computed: {
    getHomeHeight() {
      this.homeHeight = this.$refs.home.clientHeight;
    },
  },
  methods: {
    // 获取数据
    async fatchData() {
      return await getBanner();
    },
    // 更换图片
    changeImg(i) {
      if (i < 0 || i >= this.data.length) {
        this.isChanging = false;
        return;
      }
      this.index = i;
      // console.log(this.$refs.banner.style.top);
      this.$refs.banner.style.top = -this.index * this.homeHeight + "px";
    },
    // 鼠标滚轮触发事件
    wheelHandle(e) {
      if (this.isChanging) {
        return;
      }
      this.isChanging = true;
      let i = 0;

      if (e.deltaY > 0) {
        i = this.index + 1;
        this.changeImg(i);
      } else {
        i = this.index - 1;
        this.changeImg(i);
      }
    },
  },
  mounted() {
    this.homeHeight = this.$refs.home.clientHeight;
  },
  // updated() {
  //   // this.getHomeHeight();
  // },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.home-container {
  position: relative;
  height: 100vh;

  // width: 600px;
  // height: 400px;
  // margin: 50px auto;
}

.banner {
  position: relative;
  left: 0;
  top: 0;
  transition: 500ms;
  // transform: translateY(760px);
  // .fill();
}

.btn {
  .self-center();
}

.icon-up,
.icon-down {
  position: absolute;
  // width: 20px;
  // height: 20px;
  z-index: 999;
  left: 50%;
  top: 0;
  color: @words;
  cursor: pointer;
  opacity: 0.8;
  transform: translate(-50%, 0px);
  .iconfont-container {
    font-size: 36px;
  }
  &:hover {
    color: #bbbec0;
    opacity: 1;
  }
  &:hover .iconfont-container {
    text-shadow: 0 0 10px #fff;
  }
}

.icon-up {
  animation: flotUp 1.5s infinite;
}

.icon-down {
  top: auto;
  bottom: 0;
  animation: flotDown 1.5s infinite;
}
@arp: 10px;
// 向上浮动
@keyframes flotUp {
  0% {
    // opacity: 1;
    // color: red;
    transform: translate(-50%, -@arp);
  }
  50% {
    // opacity: 0;
    // color: aqua;
    transform: translate(-50%, @arp);
  }
  100% {
    // opacity: 1;
    // color: red;
    transform: translate(-50%, -@arp);
  }
}
// 向上浮动
@keyframes flotDown {
  0% {
    // opacity: 1;
    // color: red;
    transform: translate(-50%, @arp);
  }
  50% {
    // opacity: 0;
    // color: aqua;
    transform: translate(-50%, -@arp);
  }
  100% {
    // opacity: 1;
    // color: red;
    transform: translate(-50%, @arp);
  }
}

.nav {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  // background: red;
  z-index: 999;
  padding: 10px 8px;
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-bottom: 10px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
  }
}
</style>