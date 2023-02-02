import axios from 'axios'

const baseURL = process.env.BACKEND_BASE_URL

const API = axios.create({ baseURL: baseURL });

export const createChat = (data) => API.post('/chat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);