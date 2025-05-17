import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'reset.css'
import '@/assets/scss/index.scss'
import router from './router'
import store from './store'

import vConsole from 'vconsole'
// console.log('Hello world')
new vConsole()

Vue.config.productionTip = false

// 消除 click 移动浏览器300ms延迟
import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
