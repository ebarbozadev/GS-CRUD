import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import pegarAPI from '../../axios/config.js';
import './campoFormulario.css';

export default function CampoFormulario() {
    const navegar = useNavigate();

    const [nomeCandidato, setNomeCandidato] = useState('');
    const [cpf, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nota01, setNota01] = useState('');
    const [nota02, setNota02] = useState('');
    const [nota03, setNota03] = useState('');

    const cadastrar = async (evento) => {
        evento.preventDefault();

        const usuario = {
            // O valor será preenchido automaticamente pela API
            codCandidato: null,
            nomeCandidato,
            cpf,
            telefone,
            Notas: [
                {
                    // O valor será preenchido automaticamente pela API
                    idCandidato: null,
                    nota01: parseInt(nota01),
                    nota02: parseInt(nota02),
                    nota03: parseInt(nota03),
                },
            ],
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            await pegarAPI.post('/candidatos', usuario, { headers }); // Adicione os headers aqui
            console.log(usuario);
            navegar('/');
        } catch (erro) {
            console.error(erro);
        }
    };

    console.log(typeof nota01); // "string"
    return (
        <form onSubmit={cadastrar} method="POST">
            <div className="secao1">
                <label htmlFor="nomeCandidato">Nome do Candidato</label>
                <input
                    value={nomeCandidato}
                    onChange={(evento) => setNomeCandidato(evento.target.value)}
                    required
                    type="text"
                    name="nomeCandidato"
                    id="nomeCandidato"
                    placeholder="Digite o nome do candidato"
                />
            </div>
            <div className="secao2">
                <div>
                    <label htmlFor="cpf">CPF do Candidato</label>
                    <input
                        value={cpf}
                        onChange={(evento) => setCPF(evento.target.value)}
                        required
                        type="text"
                        name="cpf"
                        id="cpf"
                        placeholder="Digite o CPF do candidato"
                    />
                </div>
                <div>
                    <label htmlFor="telefone">Telefone do Candidato</label>
                    <input
                        value={telefone}
                        onChange={(evento) => setTelefone(evento.target.value)}
                        required
                        type="text"
                        name="telefone"
                        id="telefone"
                        placeholder="Digite o telefone do candidato"
                    />
                </div>
            </div>
            <div className="secao3">
                <div className="notas">
                    <div>
                        <label htmlFor="nota01">Nota 1</label>
                        <input
                            value={nota01}
                            onChange={(evento) => setNota01(evento.target.value)}
                            required
                            type="number"
                            name="nota01"
                            id="nota01"
                            min="0"
                            max="10"
                        />
                    </div>
                    <div>
                        <label htmlFor="nota02">Nota 2</label>
                        <input
                            value={nota02}
                            onChange={(evento) => setNota02(evento.target.value)}
                            required
                            type="number"
                            name="nota02"
                            id="nota02"
                            min="0"
                            max="10"
                        />
                    </div>
                    <div>
                        <label htmlFor="nota03">Nota 3</label>
                        <input
                            value={nota03}
                            onChange={(evento) => setNota03(evento.target.value)}
                            required
                            type="number"
                            name="nota03"
                            id="nota03"
                            min="0"
                            max="10"
                        />
                    </div>
                </div>
                <div className="secao3_botao">
                    <input type="submit" value="Cadastrar" />
                </div>
            </div>
        </form>
    );
}