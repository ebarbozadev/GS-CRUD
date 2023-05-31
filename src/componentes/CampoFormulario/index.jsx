import React from 'react';
import './campoFormulario.css';

export default function CampoFormulario() {
    return (
        <div>
            <div className='secao1'>
                <label htmlFor={"nomeCandidato"}>Nome do Candidato</label>
                <input type={"text"} name={"nomeCandidato"} id={"nomeCandidato"} placeholder="Digite o nome do candidato" />
            </div>
            <div className='secao2'>
                <div>
                    <label htmlFor={"cpf"}>CPF do Candidato</label>
                    <input type={"text"} name={"cpf"} id={"cpf"} placeholder="Digite o CPF do candidato" />
                </div>
                <div>
                    <label htmlFor={"telefone"}>Telefone do Candidato</label>
                    <input type={"text"} name={"telefone"} id={"telefone"} placeholder="Digite o telefone do candidato" />
                </div>
            </div>
            <div className="secao3">
                <div className='notas'>
                    <div>
                        <label htmlFor={"nota01"}>Nota 1</label>
                        <input type={"number"} name={"nota01"} id={"nota01"} min="0" max="10" />
                    </div>
                    <div>
                        <label htmlFor={"nota02"}>Nota 2</label>
                        <input type={"number"} name={"nota02"} id={"nota02"} min="0" max="10" />
                    </div>
                    <div>
                        <label htmlFor={"nota03"}>Nota 3</label>
                        <input type={"number"} name={"nota03"} id={"nota03"} min="0" max="10" />
                    </div>
                </div>
                <div className="secao3_botao">
                    <input type="button" value="Cadastrar" />
                </div>
            </div>
        </div>
    );
}