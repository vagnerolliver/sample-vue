import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";

const state = {
  data: {}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}


