import Mock from "mockjs";
// 导入用来格式化的模块
import qs from "querystring";

// bolgtype 的模拟数据
Mock.mock('/api/blogtype', 'get', {
    code: 0,
    msg: "",
    'data|1-10': [{
        'id|+1': 1,
        name: "@ctitle",
        // 该分类下文章的数量
        'articleCount|1-12': 0,
        'order|+1': 1,
    }, ]
});

// 分页获取博客的模拟数据
Mock.mock(/^\/api\/blog\?(.+)?$/, 'get', function (options) {
    const params = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            // 总数
            total: 786,
            // 当前页列表数据
            [`rows|${params.limit}`]: [{
                id: "@guid",
                // 标题
                title: "@ctitle",
                // 描述
                description: "@csentence",
                // 所属分类
                category: {
                    'id|1-10': 0,
                    name: "分类@id"
                },
                // 浏览量
                'scanNumber|0-100': 0,
                // 评论数量
                'commentNumber|0-100': 0,
                // 缩略图地址
                thumb: Mock.Random.image('300x250', '#000', '#FFF', 'RandomImg'),
                // 时间戳
                createDate: '@date'
            }]
        }
    })
});