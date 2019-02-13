module.exports = {
  baseUrl: './',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.107.167.164:8080',
        // target: 'http://192.168.1.22:8081',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
