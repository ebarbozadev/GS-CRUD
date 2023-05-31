import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Importando estilos
import Tabela from '../componentes/Tabela';

export default function Inicio() {

    const [usuarios, setUsuarios] = useState([]);

    const pegarUsuarios = async () => {
        try {
            const resposta = await axios.get('http://servidorlocal.gerencesistemas.com.br:253/candidatos')
            const data = resposta.data;
            setUsuarios(data);
        } catch (erro) {
            console.log(erro);
        }
    };

    useEffect(() => {
        pegarUsuarios();
    }, []);

    return (
        <div>
            <Tabela />
        </div>
    );
}