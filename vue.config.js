module.exports = {
  // 配置代理
  devServer: {
    open: true,
    port: '8080',
    host: '0.0.0.0',
    https: true,
    proxy: {
      // 后台接口代理
      '/file/': {
        target: 'http://localhost:888/file/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/file/': '',
        },
      },
    },
  },
};
