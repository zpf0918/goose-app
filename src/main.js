import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './registerServiceWorker'

import '@/styles/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
console.log(store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
