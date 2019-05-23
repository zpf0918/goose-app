<template>
  <div>async promise</div>
</template>


<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('getPeoplePromise').then(function (res) {
      console.log(1, res)
    })
  },
  async mounted () {
    const res = await this.$store.dispatch('getPeopleAsync')
    console.log(2, res)
  }
}
</script>

<style>
</style>
