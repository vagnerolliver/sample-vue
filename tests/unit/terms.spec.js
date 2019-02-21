import { getTerms, getTerm, saveTerm, persistTerm } from "@/untils/index";

describe('Component', () => {
  test('Get term', () => {
    return getTerms()
      .then(response => {
        expect(typeof response).toEqual('object');
      })
  });

  test('should persist one term save', async () => {
    const term = { "name": "label.cancel", "value": "cancelar" }
    const newTerm = await saveTerm(term)

    const updateTerm = { value: 'save and continue'}
    const params = Object.assign(newTerm, updateTerm);

    return persistTerm(params)
      .then(response => {
        expect(response.value).toEqual('save and continue')
       })
  });

  test('should term by id', async () => {
    const term = { "name": "label.cancel", "value": "cancelar" }
    const newTerm = await saveTerm(term)

    return getTerm(newTerm.id)
      .then(response => {
        expect(typeof response).toEqual('object');
        expect(response.id).toEqual(newTerm.id)
        expect(response.name).toEqual('label.cancel')
        expect(response.value).toEqual('cancelar')
      })
  });
})
