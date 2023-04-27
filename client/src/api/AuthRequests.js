import axios from 'axios'

const baseURL = process.env.REACT_APP_PUBLIC_BASEURL

const API = axios.create({ baseURL: baseURL });

export const logIn= (formData)=> API.post('/auth/login',formData);
export const logInStatus= (formData)=> API.post('/auth/login',formData).then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error;
  });;


export const signUp = (formData) => API.post('/auth/register', formData);
