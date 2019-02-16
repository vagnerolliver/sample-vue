import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bulma/bulma.sass'

import VueRouter from 'vue-router'

import HelloWorld from './pages/Terms'

Vue.use(VueRouter)

Vue.config.productionTip = false


const router = new VueRouter({
  routes: [
     { path: '/list/', component: HelloWorld },
     { path: '/home/', component: HelloWorld }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
