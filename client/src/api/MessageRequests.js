import axios from 'axios'

const baseURL = process.env.REACT_APP_PUBLIC_BASEURL
const API = axios.create({ baseURL: baseURL });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => API.post('/message/', data);