<template>
  <div class="home">
    <p>
      <router-link to="/css/css-dynamic-class">动态class写法</router-link>
    </p>
    <p>
      <router-link to="/css/aside">侧边模态框</router-link>
    </p>
    <p>
      <router-link to="/css/center">css居中</router-link>
    </p>
    <p>
      <router-link to="/practice/dynamic-table">动态表格</router-link>
    </p>
    <p>
      <router-link to="/practice/add-table-row">添加表格数据后高亮</router-link>
    </p>
    <p>
      <router-link to="/async/async-promise">模拟async 和 promise </router-link>
    </p>
    <p>
      <router-link to="/async/promise-all-race">promise all and race</router-link>
    </p>
    <p>
      <router-link to="/practice/debounce">防抖</router-link>
    </p>
    <p>
      <router-link to="/practice/throttle">节流</router-link>
    </p>
    <p>
      <router-link to="/practice/dynamic-component">动态组件</router-link>
    </p>
    <p>
      <router-link to="/practice/parent-and-children">父子组件</router-link>
    </p>
    <p>
      <router-link to="/practice/component-communicate">组件的跨级通讯</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
