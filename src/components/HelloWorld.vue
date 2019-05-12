<template>
  <div class="hello">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      show: false
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
