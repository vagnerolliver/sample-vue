import { mutations } from "@/store/terms/mutations";
import { actions } from "@/store/terms/actions";

// destructure assign `mutations`
const { RECEIVE_TERMS } = mutations

describe('mutations', () => {

  const state = {
    data: [],
    loading: null
  }

  test('RECEIVE_TERMS', async () => {
    const state = {
      data: [],
      loading: null
    }

    let data

    let mockCommit = (state, payload) => { data = payload }

    await actions.getAllTerms({ commit: mockCommit })

    RECEIVE_TERMS(state, data)

    const terms = state.data;

    expect(terms.length).toBeGreaterThan(1);
    expect(terms.length).toBe(2);
  })
})

