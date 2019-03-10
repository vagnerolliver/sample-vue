const axios = {
  get: () => new Promise(res => res({
    data: [
      { "name": "label_cancel", "value": "Save and Continue", "id": 1 },
      { "name": "mockado", "value": "mockao", "id": 1 },
    ]
  }) )
}
export default axios
