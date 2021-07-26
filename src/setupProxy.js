const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://127.0.0.1:4001/',// 目标服务器
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/"
            }
        }));
    app.use(
        createProxyMiddleware('/auth', {
            target: 'http://127.0.0.1:4002/', // 另一个目标服务器
            changeOrigin: true,
            pathRewrite: {
                "^/auth": "/"
            }
        }));
};