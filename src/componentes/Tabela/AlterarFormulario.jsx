import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pegarAPI from '../../axios/config';

const AlterarFormulario = () => {
    const [nomeCandidato, setNomeCandidato] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nota01, setNota01] = useState('');
    const [nota02, setNota02] = useState('');
    const [nota03, setNota03] = useState('');

    const history = useNavigate();

    useEffect(() => {
        // Recupera os dados do candidato para preencher o formulário
        const getCandidato = async () => {
            try {
                const response = await pegarAPI.get('/candidatos');
                const candidato = response.data;
                setNomeCandidato(candidato.nomeCandidato);
                setCpf(candidato.cpf);
                setTelefone(candidato.telefone);
                setNota01(candidato.Notas[0].nota01.toString());
                setNota02(candidato.Notas[0].nota02.toString());
                setNota03(candidato.Notas[0].nota03.toString());
            } catch (error) {
                console.error(error);
            }
        };

        getCandidato();
    }, []);

    const alterar = async () => {
        const usuario = {
            codCandidato: null,
            nomeCandidato: nomeCandidato,
            cpf: cpf,
            telefone: telefone,
            Notas: [
                {
                    idCandidato: null,
                    nota01: parseInt(nota01),
                    nota02: parseInt(nota02),
                    nota03: parseInt(nota03),
                },
            ],
        };

        try {
            await pegarAPI.put('/candidatos', usuario, {
                headers: {
                    nomeCandidato: nomeCandidato,
                    cpf: cpf,
                    telefone: telefone,
                    nota01: nota01,
                    nota02: nota02,
                    nota03: nota03,
                },
            });
            console.log(usuario);
            history.push('/');
        } catch (erro) {
            console.error(erro);
        }
    };

    return (
        <div>
            <h2>Alterar Candidato</h2>
            <form>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nomeCandidato}
                        onChange={(evento) => setNomeCandidato(evento.target.value)}
                    />
                </label>
                <br />
                <label>
                    CPF:
                    <input
                        type="text"
                        value={cpf}
                        onChange={(evento) => setCpf(evento.target.value)}
                    />
                </label>
                <br />
                <label>
                    Telefone:
                    <input
                        type="text"
                        value={telefone}
                        onChange={(evento) => setTelefone(evento.target.value)}
                    />
                </label>
                <br />
                <label>
                    Nota 1:
                    <input
                        type="text"
                        value={nota01}
                        onChange={(evento) => setNota01(evento.target.value)}
                    />
                </label>
                <br />
                <label>
                    Nota 2:
                    <input
                        type="text"
                        value={nota02}
                        onChange={(evento) => setNota02(evento.target.value)}
                    />
                </label>
                <br />
                <label>
                    Nota 3:
                    <input
                        type="text"
                        value={nota03}
                        onChange={(evento) => setNota03(evento.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={alterar}>
                    Alterar
                </button>
            </form>
        </div>
    );
};

export default AlterarFormulario;