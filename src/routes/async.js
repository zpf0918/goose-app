export default [{
  path: '/async',
  name: 'async',
  redirect: '/async/async-promise',
  component: () => import('../views/Main.vue'),
  children: [{
    path: 'async-promise',
    name: 'async-promise',
    component: () => import('../views/async/AsyncPromise.vue')
  }]
}]
