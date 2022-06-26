// 获取个人博客内容的接口
// 导入默认的配置请求
import instance from "./request";

// 获取所有博客分类
async function getBlogType() {
    const resp = await instance.get('/api/blogtype');
    return resp;
}

// 分页获取博客
async function getBlog(page=1,limit=10,categoryid=-1) {
    const resp = await instance.get('/api/blog',{
        params: {
            // 当前页码
            page,
            // 页容量
            limit,
            // 所属分类，-1 表示全部
            categoryid
        }
    });
    return resp;
}

export {
    getBlogType,
    getBlog
};