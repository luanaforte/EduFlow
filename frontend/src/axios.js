import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,  // Verifique se está acessando corretamente a URL
});

export default api;
