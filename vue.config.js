//@_@
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.95.207.1:8080/v1',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
    }
  },
  chainWebpack:(config)=>{  //alias 起别名
    config.resolve.alias
    .set('components',resove('./src/components'))
    .set('style',resove('./src/style'))
    .set('views',resove('./src/views'))
    .set('assets',resove('./src/assets'))
    .set('node_modules',resove('./node_modules'))
    .set('@',resove('./src'))
    .set('third-party',resove('./src/third-party'))
  }
}