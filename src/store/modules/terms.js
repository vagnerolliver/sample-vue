import { getTerm, getTerms, saveTerm, persistTerm, deleteTerm } from "@/untils/crud";

const state = {
  all: [],
  loading: null
}

// getters
const getters = {
  listTerms: (state, getters, rootState) => {
    return state.items.map(({name, value, id}) => {
       return {
         name,
         value,
         id
      }
    })
  },
}

// actions
const actions = {
  getAllTerms ({ commit }) {
    return getTerms('terms')
      .then(terms => {
        commit('setTerms', terms)
      })
      .catch(() => {
        // commit('setProducts', terms)
      })
  }
}

// mutations
const mutations = {
  setTerms (state, terms) {
    state.all = terms
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}


