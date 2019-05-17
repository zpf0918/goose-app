<template>
  <div class="container">
    <div style="float: right; margin: 10px 0;">
      <el-button type="primary" @click="add">添加数据</el-button>
    </div>
    <el-table
      :data="list"
      style="width: 100%;"
      border
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="order"
        label="序号"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align="center">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        order: 1,
        name: '人物1',
        age: 18
      }],
      isHighLight: false
    }
  },
  methods: {
    add () {
      this.isHighLight = true
      this.list.unshift({
        order: `${this.list.length + 1 }`,
        name: `人物${this.list.length + 1}`,
        age: 18
      })
      this.hideHighLight()
    },
    hideHighLight () {
      setTimeout(() => {
        this.isHighLight = false
      }, 1000)
    },
    tableRowClassName ({row, rowIndex}) {
      if (this.isHighLight && rowIndex === 0) {
        return 'high-light'
      } else {
        return 'high-light-hide'
      }
    }
  }
}
</script>

<style lang="scss">
.high-light {
  background: #0ACCAC !important;
}
.high-light-hide {
  background-color: #fff !important;
  transition-property: background-color;
  transition-duration: 5s;
  transition-timing-function: ease;
}
</style>
