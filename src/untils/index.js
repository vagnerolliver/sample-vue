import * as axios from "axios";

const getUser = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then(res => res.data)
    .catch(error => console.log(error));
}

const getTerms = () => {
  return axios
    .get(`http://localhost:3000/terms`)
    .then(res => res.data)
    .catch(error => console.log(error));
}

const getTerm = (id) => {
  return axios
    .get(`http://localhost:3000/terms/${id}`)
    .then(res => res.data)
    .catch(error => console.log(error));
}

const saveTerm = (data) => {
  return axios
    .post(`http://localhost:3000/terms/`, {...data})
    .then(res => res.data)
    .catch(error => console.log(error));
}

const persistTerm = (data) => {
  return axios
    .put(`http://localhost:3000/terms/${data.id}`, {...data})
    .then(res => res.data)
    .catch(error => console.log(error));
}

export {getUser, getTerms, getTerm, saveTerm, persistTerm};
