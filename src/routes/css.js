export default [{
  path: '/css',
  name: 'css',
  redirect: '/css/css-dynamic-class',
  component: () => import('../views/Main.vue'),
  children: [{
    path: 'css-dynamic-class',
    name: 'css-dynamic-class',
    component: () => import('../views/css/DynamicClass.vue')
  }, {
    path: 'aside',
    name: 'aside',
    component: () => import('../views/css/Aside.vue')
  }, {
    path: 'center',
    name: 'center',
    component: () => import('../views/css/Center.vue')
  }]
}]
