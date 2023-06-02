import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import pegarAPI from '../../axios/config';

const AlterarFormulario = () => {
    const [nomeCandidato, setNomeCandidato] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [notas, setNotas] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const headers = useMemo(() => location.state?.headers || {}, [location.state]);

    useEffect(() => {
        const getCandidato = async () => {
            try {
                const response = await pegarAPI.get('/candidatos', { headers });
                const candidato = response.data[0];

                setNomeCandidato(candidato.nomeCandidato);
                setCpf(candidato.cpf);
                setTelefone(candidato.telefone);
                setNotas(candidato.Notas || []);
            } catch (error) {
                console.error(error);
            }
        };

        getCandidato();
    }, [headers]);

    const alterar = async () => {
        try {
            const usuario = {
                nomeCandidato: nomeCandidato,
                cpf: cpf,
                telefone: telefone,
                Notas: notas.map((nota) => ({
                    idCandidato: nota.idCandidato,
                    nota01: nota.nota01 !== "" ? parseInt(nota.nota01) : null,
                    nota02: nota.nota02 !== "" ? parseInt(nota.nota02) : null,
                    nota03: nota.nota03 !== "" ? parseInt(nota.nota03) : null,
                })),
            };

            const headersAtualizados = {
                ...headers,
                nomeCandidato: nomeCandidato,
                cpf: cpf,
                telefone: telefone,
            };

            await pegarAPI.put('/candidatos', usuario, { headers: headersAtualizados });
            console.log(usuario);
            navigate('/');
        } catch (erro) {
            console.error(erro);
        }
    };

    const handleNotaChange = (index, field, value) => {
        setNotas((notas) => {
            const updatedNotas = [...notas];
            updatedNotas[index] = {
                ...updatedNotas[index],
                [field]: value,
            };
            return updatedNotas;
        });
    };

    return (
        <div>
            <h2>Alterar Candidato</h2>
            <form>
                <label>
                    Nome:
                    <input type="text" value={nomeCandidato} onChange={(evento) => setNomeCandidato(evento.target.value)} />
                </label>
                <br />
                <label>
                    CPF:
                    <input type="text" value={cpf} onChange={(evento) => setCpf(evento.target.value)} />
                </label>
                <br />
                <label>
                    Telefone:
                    <input type="text" value={telefone} onChange={(evento) => setTelefone(evento.target.value)} />
                </label>
                <br />
                {notas.map((nota, index) => (
                    <div key={index}>
                        <label>
                            Nota 01:
                            <input
                                type="number"
                                value={nota.nota01 !== null ? nota.nota01.toString() : ""}
                                onChange={(evento) => handleNotaChange(index, 'nota01', evento.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Nota 02:
                            <input
                                type="number"
                                value={nota.nota02 !== null ? nota.nota02.toString() : ""}
                                onChange={(evento) => handleNotaChange(index, 'nota02', evento.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Nota 03:
                            <input
                                type="number"
                                value={nota.nota03 !== null ? nota.nota03.toString() : ""}
                                onChange={(evento) => handleNotaChange(index, 'nota03', evento.target.value)}
                            />
                        </label>
                        <br />
                    </div>
                ))}
                <button type="button" onClick={alterar}>
                    Alterar
                </button>
            </form>
        </div>
    );
};

export default AlterarFormulario;