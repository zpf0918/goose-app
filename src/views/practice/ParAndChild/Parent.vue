<template>
  <div id="parent">
    <div id="test">{{ message }}</div>
    <input type="text"  v-model="inputValue" @input="handleInput"/>
    {{ inputValue }}
    <button @click="updateMessage">点击</button>
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
      message: '未更新',
      inputValue: '',
      isShow: false
    }
  },
  created () {
    // console.log(document.querySelector('#parent')) 
  },
  mounted () {
    // console.log(document.querySelector('#parent')) 
  },
  updated () {
    // console.log(1, document.querySelector('#test'))
  },
  methods: {
    handleClick () {
      this.message = 'wewer'
      this.$nextTick(() => {
        this.message = this.message.toUpperCase()
      })
    },
    updateMessage: function () {
      this.message = '已更新'
      this.isShow = true
      console.log(this)
      console.log(document.querySelector('#test').innerHTML)
      // console.log(document.querySelector('#test'), document.querySelector('#test').innerText)
      this.$nextTick(function () {
        console.log(document.querySelector('#test').innerHTML)
      })
    },
    handleInput (e) {
      this.$nextTick(() => {
        this.inputValue = this.inputValue.replace(/\s/g, '')
      })
    }
  }
}
</script>
