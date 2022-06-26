// 路由模块
import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

const router = new Router({
    // 路由规则
    routes,
    // 路由模式
    mode: "history"
});

export default router;