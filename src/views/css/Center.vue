<template>
  <main class="inline-block-center">
    <div class="module span-center">
      <span>行内元素的水平居中行内元素的水平居中行内元素的水平居中行内元素的水平居中</span>
    </div>
    <div class="module div-center">
       <div class="children">行内元素的水平居中</div>
    </div>

    <div class="module table">
      <span>水电费水电费第三方是打发第三方是打发第三方</span>
    </div>
  </main>
</template>

<script>
</script>

<style lang="scss">
.inline-block-center {
  // text-align: center;
  display: inline-block;
}

.module {
  margin: 10px;
  background: #0ACCAC;
  color: #fff;
  height: 100px;
  width: 200px;
}

.span-center {
  span {
    line-height: 100px;
    white-space: nowrap;
    // text-align: center;
  }
}

.div-center {
  .children {
    margin: 0 auto;
    width: 50px; // 如果不设置宽度，那么就是自动居中
  }
}

.table {
  display: table;
  span {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
