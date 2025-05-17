import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'reset.css'
import '@/assets/scss/index.scss'
import router from './router'
import store from './store'
// 消除 click 移动浏览器300ms延迟
import attachFastClick from 'fastclick'
import vConsole from 'vconsole'
import VueLazyload from 'vue-lazyload'
new vConsole()

Vue.config.productionTip = false
attachFastClick.attach(document.body)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: './image.png',
  attempt: 1
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
