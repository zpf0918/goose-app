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

// function unique(args) {
//   if (!Array.isArray(args)) return

//   const arr = []
//   args.forEach(elem => {
//     if (!arr.includes(elem)) {
//       arr.push(elem)
//     }
//   })
//   return arr
// }

// function unique(arr) {
//   const result = arr.reduce((prev, next) => {
//     if (!prev.includes(next)) { prev.push(next) }
//     return prev
//   }, [])
//   return result
// }
</script>
