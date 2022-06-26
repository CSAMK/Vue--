// 获取图片接口

import instance from "./request";

async function getBanner() {
    const resq = await instance.get('/api/banner');
    return resq;
}

export default getBanner;