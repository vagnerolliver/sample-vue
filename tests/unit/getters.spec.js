import { getters } from '@/store/terms/getters'

describe('getters', () => {
  test('filteredTerms', () => {
    // mock state
    const state = {
      data: [
        { id: 1, name: 'label_cancel', value: 'Save and Continue' },
        { id: 2, name: 'label_edit', value: 'Edit' },
        { id: 3, name: 'label_confirm', value: 'Confirmar' }
      ]
    }

    const findById = getters.getTermById(state, 2)
    const findAll = getters.listTerms(state)

    // assert the result
    expect(findById).toEqual({ id: 2, name: 'label_edit', value: 'Edit' })
    expect(findAll).toEqual([
      { id: 1, name: 'label_cancel', value: 'Save and Continue' },
      { id: 2, name: 'label_edit', value: 'Edit' },
      { id: 3, name: 'label_confirm', value: 'Confirmar' }
    ])
  })
})
