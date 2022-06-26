// 联系列表
<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <Iconfont className="github" />
        ZF777
      </a>
    </li>
    <li>
      <a href="mailto:1014731526@qq.com">
        <Iconfont className="mail" />
        1014731526@qq.com
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1014731526&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <Iconfont className="qq" />
        1014731526
      </a>
    </li>
    <li>
      <a>
        <Iconfont className="weixin" class="weixin" />
        ZF666
      </a>
      <div>
        <img src="@/assets/code.jpg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Iconfont from "@/components/Iconfont/Iconfont.vue";
export default {
  components: {
    Iconfont,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/common.less";
@import "~@/styles/var.less";

.contact-container {
  width: 100%;
  color: @gray;
  position: relative;
  bottom: 0;
  padding-bottom: 20px;
  li {
    font-size: 14px;
    padding: 8px 0px;
    // &:hover {
    //   color: @primary;
    // }
    a {
      position: relative;
      display: flex;
      cursor: pointer;
      align-items: center;
      padding-left: 20px;
      &:hover ~ div {
        transform: scaleY(1);
      }
    }
    .iconfont-container {
      font-size: 18px;
      margin: 0 3px;
      &.weixin {
        font-size: 22px;
        margin-left: 0px;
      }
    }
    div {
      position: absolute;
      width: 130px;
      height: 130px;
      left: 8px;
      top: -21px;
      transform-origin: center bottom;
      transform: scaleY(0);

      transition: 0.3s;
      background: #fff;
      border-radius: 5px;
      padding: 5px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: #fff;
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }
}
</style>