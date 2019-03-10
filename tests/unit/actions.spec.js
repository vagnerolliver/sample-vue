import { actions } from "@/store/terms/actions";

describe('actions', () => {

  test('tests with a mock commit', async () => {

    let count = 0
    let data

    let mockCommit = (state, payload) => {
      data = payload
      count = 1
    }

    await actions.getAllTerms({ commit: mockCommit })

    expect(count).toBe(1)
    expect(data).toEqual([
        { "name": "label_cancel", "value": "Save and Continue", "id": 1 },
        { "name": "mockado", "value": "mockao", "id": 1 },
    ])

  })

})
