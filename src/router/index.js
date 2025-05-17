import Vue from 'vue'
import VueRouter from 'vue-router'

import Recommend from '@v/Recommend'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import(/* webpackChunkName: "singer" */ '@v/Singer')
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import(/* webpackChunkName: "rank" */ '@v/Rank')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '@v/Search')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@v/User')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
