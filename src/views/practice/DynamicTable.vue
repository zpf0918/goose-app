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
import { dynamicTableData } from '@/mock/practice/table.js'
import axios from 'axios'

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
    this.tableData = dynamicTableData
  },
  mounted () {
    const getData = function (url) {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest()
        req.open('GET', url, true)
        req.onload = function () {
          console.log(req)
          if (req.status === 200) {
            resolve(req.responseText)
          } else {
            reject(new Error(req.statusText))
          }
        }
        req.onerror = function () {
          reject(new Error(req.statusText))
        }
        req.send()
      })
    }
    // var url= 'http://api.myjson.com/bins/khn66'
    var url = '../../../static/index.json'
    getData(url).then(function onFullFilled(value) {
      console.log(value)
    }).catch(function onRejected(value) {
      console.log(value)
    })
  }
}
</script>

<style>
</style>
