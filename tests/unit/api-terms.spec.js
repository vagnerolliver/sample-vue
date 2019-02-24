import { getTerm, getTerms, saveTerm, persistTerm, deleteTerm } from "@/untils/crud";

describe('Component', () => {
  let newTerm;

  beforeEach( async () => {
    const term = { "name": "label_cancel", "value": "cancelar" }
    newTerm = await saveTerm(term, 'termsTest')
  });

  afterEach( async () => {
    newTerm = await deleteTerm(newTerm.id, 'termsTest')
  });

  test('should persist one term save', async () => {
    const updateTerm = { value: 'save and continue'}
    const params = Object.assign(newTerm, updateTerm);

    return persistTerm(params, 'termsTest')
      .then(response => {
        expect(response.value).toEqual('save and continue')
       })
  });

  test('should get term by id', async () => {
    return getTerm(newTerm.id, 'termsTest')
      .then(response => {
        expect(typeof response).toEqual('object');
        expect(response.id).toEqual(newTerm.id)
        expect(response.name).toEqual('label_cancel')
        expect(response.value).toEqual('cancelar')
      })
  });

  test('should get terms', async () => {
    return getTerms('termsTest')
      .then(response => {
        expect(response[0].id).toEqual(newTerm.id)
      })
  });
})
