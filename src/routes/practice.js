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
  }]
}]
