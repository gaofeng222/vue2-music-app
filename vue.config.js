const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue2-music-app/' : './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "~@/assets/scss/variable.scss" as *; @use "~@/assets/scss/mixin.scss" as *;`
      }
    }
  },
  lintOnSave: true,
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@c': resolve(__dirname, 'src/components')
      }
    }
  }
})
