<template>
  <div>
    我是Gradfather
    <father
      foo="foo"
      bar="bar"
      title="title"
      v-on:test="handleTest"
    ></father>
  </div>
</template>

<script>
import Father from './Father.vue'

export default {
  name: 'Gradfather',
  components: {
    Father
  },
  data () {
    return {
      foo: 'foo',
      bar: 'bar',
      foobar: 'foobar'
    }
  },
  methods: {
    handleTest (args) {
      this.foobar = 'ok'
      console.log(this.foobar, args)
    }
  }
}
</script>
