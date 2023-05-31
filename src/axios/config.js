import axios from 'axios';

const baseURL = 'http://servidorlocal.gerencesistemas.com.br:253';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;