import axios from 'axios'

const baseURL = process.env.REACT_APP_PUBLIC_BASEURL
const API = axios.create({ baseURL: baseURL });



export const getServerStatus= ()=> API.get(`/`);
