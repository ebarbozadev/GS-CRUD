import React from 'react';
import CampoFormulario from '../componentes/CampoFormulario';
import styles from './Adicionar.module.css';

export default function Adicionar() {
    return (
        <form className={styles.formulario}>
            {/* 
                Dados necessários:
                - nomeCandidato
                - cpf
                - telefone
                - nota01
                - nota02
                - nota03
            */}

            <CampoFormulario />

            {/* 
                Consegui fazer dessa forma mas como não consegui estiliar cada um para fazer da forma que queria, deixei de ladoFF

                <CampoFormulario className={styles.teste} htmlFor={"nomeCandidato"} children={"Nome do Candidato"} type={"text"} name={"nomeCandidato"} id={"nomeCandidato"} placeholder={"Digite o nome do candidato"} />
                <CampoFormulario htmlFor={"cpf"} children={"CPF do Candidato"} type={"text"} name={"cpf"} id={"cpf"} placeholder={"Digite o CPF do candidato"} />
                <CampoFormulario htmlFor={"telefone"} children={"Telefone do Candidato"} type={"text"} name={"telefone"} id={"text"} placeholder={"Digite o telefone do candidato"} />
                <CampoFormulario htmlFor={"nota01"} children={"Nota 1"} type={"number"} name={"nota01"} id={"nota01"} placeholder={"Digite a primeira nota do candidato"} />
                <CampoFormulario htmlFor={"nota02"} children={"Nota 2"} type={"number"} name={"nota02"} id={"nota02"} placeholder={"Digite a segunda nota do candidato"} />
                <CampoFormulario htmlFor={"nota03"} children={"Nota 3"} type={"number"} name={"nota03"} id={"nota03"} placeholder={"Digite a terceira nota do candidato"} /> 
            */}
        </form>
    );
}