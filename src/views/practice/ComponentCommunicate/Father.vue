<template>
  <div>
    我是 Father
    <children 
      v-bind="$attrs"
      v-on="$listeners"
    ></children>
  </div>
</template>

<script>
import Children from './Children.vue'

export default {
  components: {
    Children
  },
  created () {
    // console.log(this.$attrs)
    // console.log(this.$listeners)
  }
}
</script>
