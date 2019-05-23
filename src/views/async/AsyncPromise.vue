<template>
  <div>async promise</div>
</template>


<script>
export default {
  data () {
    return {
      promiseData: {},
      asyncData: {}
    }
  },
  created () {
    let that = this
    this.$store.dispatch('getPeoplePromise').then(function (res) {
      that.promiseData = res
    })
  },
  async mounted () {
    const res = await this.$store.dispatch('getPeopleAsync')
    this.asyncData = res
  }
}
</script>

<style>
</style>
