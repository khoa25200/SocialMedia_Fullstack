import axios from 'axios'

const baseURL = process.env.REACT_APP_PUBLIC_BASEURL

const API = axios.create({ baseURL: baseURL });

export const createChat = (data) => API.post('/chat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);