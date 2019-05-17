<template>
  <div class="container">
    <el-table
      :data="tableData.list"
      style="width: 100%;"
      border>
      <el-table-column
        v-for="(item, index) in tableData.cols"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mock } from '@/mock'

export default {
  data () {
    return {
      tableData: {
        list: [],
        cols: []
      }
    }
  },
  created () {
    this.tableData = mock.dynamicTableData
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 950px;
}
</style>
