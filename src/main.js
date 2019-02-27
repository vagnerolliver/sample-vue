import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bulma/bulma.sass'

import VueRouter from 'vue-router'

import Terms from './pages/Terms'
import TermsList from './pages/ListTerms'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {name: 'TermsList', path: '/list', component: TermsList},
    {name: 'Terms', path: '/modules', component: Terms},
    {path: '/', redirect: '/modules' }
  ]
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
