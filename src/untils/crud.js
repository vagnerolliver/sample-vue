import axios from 'axios';

const getTerms = (path) => {
  return axios
    .get(`http://localhost:3000/${path}`)
    .then(res => res.data)
    .catch(() => { });
}

const getTerm = (id, path) => {
  return axios
    .get(`http://localhost:3000/${path}/${id}`)
    .then(res => res.data)
    .catch(() => { });
}

const saveTerm = (data, path) => {
  return axios
    .post(`http://localhost:3000/${path}/`, {...data})
    .then(res => res.data)
    .catch(() => { });
}

const persistTerm = (data, path) => {
  return axios
    .put(`http://localhost:3000/${path}/${data.id}`, {...data})
    .then(res => res.data)
    .catch(() => { });
}

const deleteTerm = (id, path) => {
  return axios
    .delete(`http://localhost:3000/${path}/${id}`)
    .then(res => res.data)
    .catch(() => { });
}

export {getTerms, getTerm, saveTerm, persistTerm, deleteTerm};
