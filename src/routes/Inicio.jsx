import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Tabela from '../componentes/Tabela'

export default function Inicio() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const pegarUsuarios = async () => {
            try {
                const resposta = await axios.get(
                    'http://servidorlocal.gerencesistemas.com.br:253/candidatos'
                );
                const data = resposta.data;
                setUsuarios(data);
                console.log(data); // Verifique os dados retornados pela API aqui
            } catch (erro) {
                console.log(erro);
            }
        };

        pegarUsuarios();
    }, []);

    return (
        <div>
            {usuarios.length === 0 ? ('') : (
                <Tabela usuarios={usuarios} />
            )}
        </div>
    );
}