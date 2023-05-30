// Importanto o axios
import axios from 'axios';

// Colocando a API em uma const para facilitar o uso e não ter que ficar reescrevendo toda hora que for usar
const pegarAPI = axios.get('http://servidorlocal.gerencesistemas.com.br:253/candidatos')
    .then(resposta => {
        // Imprimir os dados no console
        console.log(resposta.data);
    })
    .catch(erro => {
        // Imprimindo o erro no console, caso ocorra
        console.error(erro);
    });

    console.log(resposta.data)

// Exportando para conseguirmos utilizar em outro arquivo
export default pegarAPI;