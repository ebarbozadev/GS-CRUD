// Importanto o axios
import axios from 'axios';

// Colocando a API em uma const para facilitar o uso e não ter que ficar reescrevendo toda hora que for usar
const baseURL = 'http://servidorlocal.gerencesistemas.com.br:253';

const pegarAPI = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
});

// Exportando para conseguirmos utilizar em outro arquivo
export default pegarAPI;