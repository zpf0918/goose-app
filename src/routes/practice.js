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
  }, {
    path: 'parent-and-children',
    name: 'parent-and-children',
    component: () => import('../views/practice/ParAndChild/Parent.vue')
  }, {
    path: 'component-communicate',
    name: 'component-communicate',
    component: () => import('../views/practice/ComponentCommunicate/Gradfather.vue')
  }]
}]
