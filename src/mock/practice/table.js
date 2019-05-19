// 动态表格数据
const dynamicTableData = {
  list: [{
    order: '1',
    name: '小明',
    age: 18
  }, {
    order: '2',
    name: '小红',
    age: 20
  }, {
    order: '3',
    name: '小白',
    age: 24
  }, {
    order: '4',
    name: '小黑',
    age: 12
  }, {
    order: '5',
    name: '明明',
    age: 20
  }],
  cols: [{
    prop: 'order',
    label: '序号'
  }, {
    prop: 'name',
    label: '姓名'
  }, {
    prop: 'age',
    label: '年龄'
  }]
}

export {
  dynamicTableData
}
