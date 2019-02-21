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
    {path: '/terms/list', component: TermsList},
    {path: '/terms/', component: Terms},
    {path: '/', component: Terms}
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
