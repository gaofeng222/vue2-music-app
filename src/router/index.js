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
    component: import(/* webpackChunkName: "recommend" */ '@v/Recommend.vue')
  },
  {
    path: '/singer',
    component: import(/* webpackChunkName: "singer" */ '@v/Singer.vue')
  },
  {
    path: '/rank',
    component: import(/* webpackChunkName: "rank" */ '@v/Rank.vue')
  },
  {
    path: '/search',
    component: import(/* webpackChunkName: "search" */ '@v/Search.vue')
  },
  {
    path: '/user',
    component: import(/* webpackChunkName: "about" */ '@v/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
