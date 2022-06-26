// 轮播图组件
<template>
  <div
    class="banner-container"
    ref="bannerContainer"
    @mousemove="getMouseMov"
    @mouseleave="setImgCenter"
  >
    <ImageLoader
      :src="bigImg"
      :placeholder="midImg"
      @load="showText"
      ref="imgContainer"
    />
    <h2 class="desc" ref="desc">{{ this.description }}</h2>
    <h3 class="character" ref="character">--{{ this.character }}</h3>
  </div>
</template>

<script>
// 导入实现渐进式图片的组件模块
import ImageLoader from "@/components/ImageLoader/ImageLoader.vue";

export default {
  props: {
    bigImg: {
      type: String,
      required: true,
    },
    midImg: {
      type: String,
      required: true,
    },
    character: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {
      // 描述文字宽度
      descWidth: 0,
      // 人物文字宽度
      charWidth: 0,
      // 储存外层容器的信息
      bannerContainer: null,
      // 储存图片的信息
      imgContainer: null,
      // 最大的边距（X轴）
      maxMarginX: 0,
      // 最大的边距（Y轴）
      maxMarginY: 0,
      // 需要移动的位置（X轴）
      movX: 0,
      // 需要移动的位置（Y轴）
      movY: 0,
      // 鼠标位置的距离（X轴）
      layerX: 0,
      // 鼠标位置的距离（Y轴）
      layerY: 0,
    };
  },
  components: {
    ImageLoader,
  },
  mounted() {
    // 设置文本的宽度
    this.descWidth = this.$refs.desc.clientWidth;
    this.charWidth = this.$refs.character.clientWidth;
    // console.log(this.$refs);
    // this.setImgCenter();

    // 设置外层容器的宽高
    this.bannerContainer = {
      width: this.$refs.bannerContainer.clientWidth,
      height: this.$refs.bannerContainer.clientHeight,
    };

    // 设置图片容器的宽高
    this.imgContainer = {
      width: this.$refs.imgContainer.$el.clientWidth,
      height: this.$refs.imgContainer.$el.clientHeight,
    };

    // console.log(this.bannerContainer, this.imgContainer);

    // 设置最大边距
    this.maxMarginX = this.bannerContainer.width - this.imgContainer.width;
    this.maxMarginY = this.bannerContainer.height - this.imgContainer.height;

    // 先把图片进行居中
    this.layerX = this.bannerContainer.width / 2;
    this.layerY = this.bannerContainer.height / 2;
    this.setImgCenter();
  },
  methods: {
    // 文字展示
    showText() {
      this.$refs.desc.style.width = "0px";
      this.$refs.character.style.width = "0px";
      this.$refs.desc.style.opacity = 1;
      this.$refs.character.style.opacity = 1;

      // 重新渲染
      this.$refs.desc.clientWidth;
      this.$refs.character.clientWidth;

      this.$refs.desc.style.transition = "2s";
      this.$refs.character.style.transition = "1s 2s";

      this.$refs.desc.style.width = this.descWidth + "px";
      this.$refs.character.style.width = this.charWidth + "px";
      // this.$refs.character.style.left = this.descWidth - this.charWidth + "px";
      this.$refs.character.style.transform = `translateX(${
        this.descWidth - this.charWidth
      }px)`;
    },
    // 根据鼠标移动的位置改变图片的位置
    getMouseMov(e) {
      this.layerX = e.layerX;
      this.layerY = e.layerY;
      this.setImgSite();
    },
    // 控制图片位置
    setImgSite() {
      // 在 X 轴上移动的距离
      this.movX = (this.maxMarginX / this.bannerContainer.width) * this.layerX;
      // 在 Y 轴上移动的距离
      this.movY = (this.maxMarginY / this.bannerContainer.height) * this.layerY;
      this.$refs.imgContainer.$el.style.transform = `translate(${this.movX}px,${this.movY}px)`;
    },
    // 鼠标离开触发的事件
    setImgCenter() {
      this.layerX = this.bannerContainer.width / 2;
      this.layerY = this.bannerContainer.height / 2;
      this.setImgSite();
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/common.less";
@import "~@/styles/mixins.less";
.banner-container {
  .fill(relative);
  .imageLoader-container {
    width: 110%;
    height: 110%;
    transition: 0.5s;
    z-index: -1;
  }
  overflow: hidden;
  // outline: 2px solid red;
}
.desc,
.character {
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  color: #fff;
  position: absolute;
  left: 30px;
  top: calc(70% + 30px);
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
}

.character {
  left: 0;
  transform: translateX(0px);
  // text-align: right;
  // text-indent: 100px;
  top: calc(70% + 60px);
}
</style>