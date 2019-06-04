<template>
  <div>
    我是children
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  props: ['foo'],
  created () {
    console.log(this.$attrs)
    // console.log(this.$listeners)
  },
  methods: {
    handleClick () {
      this.$listeners['test']('haha')
    }
  }
}
</script>
