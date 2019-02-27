import Vue from 'vue'
import Vuex from 'vuex'
import terms from './modules/terms'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {terms}
})
