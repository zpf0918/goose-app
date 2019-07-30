// vuex的基本实现

function createStore ({ state, mutations }) {
  return new Vue({
    data: { state },
    methods: {
      commit (mutationType) {
        mutations[mutationType](this.state)
      }
    }
  })
}

const store = createStore({
  state: { count: 0 },
  mutations: {
    inc (state) {
      state.count++
    }
  }
})
