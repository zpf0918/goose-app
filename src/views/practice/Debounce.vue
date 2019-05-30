<template>
  <div class="container">
    <!-- <el-input v-model="message"></el-input> -->
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
      this.test = this.debounce(this.handleValue, 2000)
    },
    handleInput () {
      this.test()
    },
    debounce (fn, delay) {
      var timer
      return function () {
        var that = this
        var args = arguments

        clearTimeout(timer)

        timer = setTimeout(() => {
          console.log('ok')
          fn()
        }, delay)
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
