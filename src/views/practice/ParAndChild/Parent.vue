<template>
  <div>
    <span>父组件</span>
    <button @click="handleClick">increment</button>

    <children :resPlatOrgId="demand.resPlatOrgId"></children>
  </div>
</template>

<script>
import Children from './Children'

export default {
  components: { 
    Children
  },
  data () {
    return {
      demand: {
        resPlatOrgId: ''
      }
    }
  },
  methods: {
    handleClick () {
      this.demand.resPlatOrgId = 'ok'
      let that = this
      setTimeout(() => {
        Promise.resolve('2').then(function (res) {
          that.demand.resPlatOrgId = res
        })
      }, 1000)
    }
  }
}
</script>
