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
        '@c': resolve(__dirname, 'src/components'),
        '@v': resolve(__dirname, 'src/views'),
        '@a': resolve(__dirname, 'src/assets'),
        '@u': resolve(__dirname, 'src/utils'),
        '@s': resolve(__dirname, 'src/store'),
        '@r': resolve(__dirname, 'src/router')
      }
    }
  },
  // 生产环境关闭console
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true
        return args
      })
    }
  }
})
