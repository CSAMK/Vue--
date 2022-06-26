module.exports = {
    // 解决跨域问题
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.163.com/'
            }
        }
    }
};