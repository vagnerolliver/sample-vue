// getters
export const getters = {
  listTerms: (state) => {
    return state.data.map(({name, value, id}) => {
      return {
        name,
        value,
        id
      }
    })
  },
  getTermById: (state, id) => {
    return state.data.find( term => term.id === id)
  }
}
