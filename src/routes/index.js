import Vue from 'vue'
import Router from 'vue-router'

import cssRouter from './css'
import practiceRouter from './practice'
import asyncRouter from './async'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home')
    },
    ...cssRouter,
    ...practiceRouter,
    ...asyncRouter
  ]
})
