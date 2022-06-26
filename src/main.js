import Vue from 'vue';
import App from './App.vue';
import "./styles/common.less";
import router from "./router";
// Vue.config.productionTip = false;

// 引入调用弹出框的方法，并放到 Vue 的原型上，这样其他的组件就可以直接调用了
import {popover} from "@/untils";
// console.log(popover)
Vue.prototype.popover = popover;

// 引入模拟数据模块
import "@/mock";

// 引入自定义组件-加载动画效果模块
import {loading} from "@/instruction/index";
Vue.directive('loading',loading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
