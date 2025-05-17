import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recommend',
    component: import(/* webpackChunkName: "recommend" */ '@v/Recommend')
  },
  {
    path: '/singer',
    component: import(/* webpackChunkName: "singer" */ '@v/Singer')
  },
  {
    path: '/rank',
    component: import(/* webpackChunkName: "rank" */ '@v/Rank')
  },
  {
    path: '/search',
    component: import(/* webpackChunkName: "search" */ '@v/Search')
  },
  {
    path: '/user',
    component: import(/* webpackChunkName: "about" */ '@v/User')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
