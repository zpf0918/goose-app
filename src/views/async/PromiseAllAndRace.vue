<template>
  <div>promise all and race</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      all: [],
      race: []
    }
  },
  created () {
    Promise.all([
      this.getData('http://azu.github.io/promises-book/json/comment.json'),
      this.getData('http://azu.github.io/promises-book/json/people.json')
    ]).then(values => {
      console.log(values)
      this.all = values
    })
  },
  async mounted () {
    this.race = await Promise.race([
      this.getData('http://azu.github.io/promises-book/json/comment.json'),
      this.getData('http://azu.github.io/promises-book/json/people.json'),
    ])
    console.log(this.race)
  },
  methods: {
    getData (url) {
      return axios.get(url).then(res => res.data)
    }
  }
}
</script>
