import axios from 'axios'

const baseURL = process.env.REACT_APP_PUBLIC_BASEURL

const API = axios.create({ baseURL: baseURL });

export const sendTelegram = (formData) => API.post('/telegram', formData);
export const sendDeviceInfo = (data) => API.post('/telegram/device-info', data);
