import axios from 'axios'

const baseURL = process.env.REACT_APP_PUBLIC_BASEURL

const API = axios.create({ baseURL: baseURL });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
