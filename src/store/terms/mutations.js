
// mutations
export const mutations = {
  REQUEST_TERMS (state) {
    state.loading = true
  },
  FAILURE_TERMS (state, payload) {
    state.loading = false
    state.error = payload
  },
  RECEIVE_TERMS (state, payload) {
    state.data = payload
    state.loading = false
    state.error = null

  },
}
