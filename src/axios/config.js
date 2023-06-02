import axios from 'axios';

const api = axios.create({
  baseURL: 'http://servidorlocal.gerencesistemas.com.br:253',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'nomeCandidato': '',
    'cpf': '',
    'telefone': '',
    'nota01': '',
    'nota02': '',
    'nota03': ''
  },
});

export default api;