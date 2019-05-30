<template>
  <div class="container">
    <input id="message" @input="handleInput" @focus="handleFocus"/>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    handleFocus () {
      this.test = this.throttle(this.handleValue, 5000)
    },
    handleInput () {
      this.test()
    },
    throttle (fn, threshold) {
      var timer
      var last

      return function () {
        var context = this
        var args = arguments

        var now = +new Date()
        if (last && now < last + threshold) {
          clearTimeout(timer)
          timer = setTimeout(() => {
            last = now
            fn.apply(context, args)
            console.log('ok')
          }, threshold)
        } else {
          console.log(last)
          last = now
          fn.apply(context, args)
        }
      }
    },
    test () {
    },
    handleValue () {
      this.message = document.getElementById('message').value
    }
  }
}
</script>
