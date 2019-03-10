import { getTerms } from "@/untils/crud";

export const actions = {
  getAllTerms ({ commit }) {
    commit('REQUEST_TERMS')
    return getTerms('terms')
      .then(terms => {
        console.log('response', terms)
        commit('RECEIVE_TERMS', terms)
      })
      .catch((error) => {
        commit('FAILURE_TERMS', error)
      })
  }
}
