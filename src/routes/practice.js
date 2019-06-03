export default [{
  path: '/practice',
  name: 'practice',
  redirect: '/practice/dynamic-table',
  component: () => import('../views/Main.vue'),
  children: [{
    path: 'dynamic-table',
    name: 'dynamic-table',
    component: () => import('../views/practice/DynamicTable.vue')
  }, {
    path: 'add-table-row',
    name: 'add-table-row',
    component: () => import('../views/practice/AddTableRow.vue')
  }, {
    path: 'debounce',
    name: 'debounce',
    component: () => import('../views/practice/Debounce.vue')
  }, {
    path: 'throttle',
    name: 'throttle',
    component: () => import('../views/practice/Throttle.vue')
  }, {
    path: 'dynamic-component',
    name: 'dynamic-component',
    component: () => import('../views/practice/DynCom/DynCom.vue')
  }]
}]
