// 配置请求
import axios from "axios";

// 引入弹出框模块
import popover from "@/untils/popover";

const instance = axios.create();

// 设置响应拦截器
instance.interceptors.response.use(function (resp) {
   if (resp.data.code !== 0) {
    popover({
        content: resp.data.msg,
        type: 'error'
    });
    return null;
   }
   return resp.data.data;
});

export default instance;