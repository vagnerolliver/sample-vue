import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bulma/bulma.sass'

import VueRouter from 'vue-router'

import Terms from './pages/Terms'
import TermsList from './pages/ListTerms'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {name: 'TermsList', path: '/list', component: TermsList},
    {name: 'Terms', path: '/terms', component: Terms},
    {path: '/', redirect: '/terms' }
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
