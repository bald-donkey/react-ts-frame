const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware(
            '/api', { // 遇到 /api 前缀的请求，会触发代理配置
            target: 'http://chst.vip:8081/',// 目标服务器
            changeOrigin: true, // 控制服务器收到的响应头中host字段的值
            pathRewrite: {
                "^/api": "/" // 重写请求路径
            }
        }));
    app.use(
        createProxyMiddleware(
            '/auth', {
            target: 'http://ng.aegis-info.com:8500/', // 另一个目标服务器
            changeOrigin: true,
            pathRewrite: {
                "^/auth": "/"
            }
        }
        ));
};