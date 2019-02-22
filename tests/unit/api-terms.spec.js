import { getTerms, getTerm, saveTerm, persistTerm, deleteTerm } from "@/untils/crud";

describe('Component', () => {

  afterEach(() => {
    deleteTerm('1', 'termsTest')
  });

  test('Get term', () => {
    return getTerms('termsTest')
      .then(response => {
        expect(typeof response).toEqual('object');
      })
  });

  test('should persist one term save', async () => {
    const term = { "name": "label_cancel", "value": "cancelar" }
    const newTerm = await saveTerm(term, 'termsTest')

    const updateTerm = { value: 'save and continue'}
    const params = Object.assign(newTerm, updateTerm);

    return persistTerm(params, 'termsTest')
      .then(response => {
        expect(response.value).toEqual('save and continue')
       })
  });

  test('should term by id', async () => {
    const term = { "name": "label_cancel", "value": "cancelar" }
    const newTerm = await saveTerm(term, 'termsTest')

    return getTerm(newTerm.id, 'termsTest')
      .then(response => {
        expect(typeof response).toEqual('object');
        expect(response.id).toEqual(newTerm.id)
        expect(response.name).toEqual('label_cancel')
        expect(response.value).toEqual('cancelar')
      })
  });
})
