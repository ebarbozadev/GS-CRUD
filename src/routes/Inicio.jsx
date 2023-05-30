import React from 'react';
import Tabela from '../componentes/Tabela';
import pegarAPI from '../axios/config.js';

export default function Inicio(){
    console.log(pegarAPI);

    return(
        <div>
            <p>Inicio</p>
            <Tabela />

        </div>
    );
}