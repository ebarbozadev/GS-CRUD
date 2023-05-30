import React from 'react';
import Tabela from '../componentes/Tabela';
import pegarAPI from '../axios/config.js';

export default function Inicio(){
    console.log(pegarAPI);
    console.log(pegarAPI.resposta.data);

    return(
        <div>
            <p>Inicio</p>
            <Tabela />

        </div>
    );
}