import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import pegarAPI from '../../axios/config';
import './AlterarFormulario.css';

const AlterarFormulario = () => {
    const [codCandidato, setCodCandidato] = useState('');
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

                setCodCandidato(candidato.codCandidato);
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

            const headersAtualizados = {
                codCandidato,
                nomeCandidato,
                cpf,
                telefone,
                nota01: notas[0].nota01,
                nota02: notas[0].nota02,
                nota03: notas[0].nota03,
            }

            await pegarAPI.put('/candidatos', null, { headers: headersAtualizados });
            navigate('/');
        } catch (erro) {
            console.error(erro);
        }
    };

    const handleNotaChange = (index, field, value) => {
        // Verifica se o valor está fora do intervalo válido (0 a 10)
        if (value < 0 || value > 10) {
            return; // Retorna sem fazer alterações
        }

        setNotas((notas) => {
            const updatedNotas = [...notas];
            updatedNotas[index] = {
                ...updatedNotas[index],
                [field]: value,
            };
            return updatedNotas;
        });
    };

    console.log(notas);

    return (
        <div>
            <form className='formulario'>
                <div className="secao1">
                    <label>
                        Nome do Candidato
                    </label>
                    <input required placeholder="Digite o nome do candidato" type="text" value={nomeCandidato} onChange={(evento) => setNomeCandidato(evento.target.value)} />
                </div>
                <div className="secao2">
                    <div>
                        <label>
                            CPF do Candidato
                        </label>
                        <input required type="text" value={cpf} onChange={(evento) => setCpf(evento.target.value)} />
                    </div>
                    <div>
                        <label>
                            Telefone do Candidato
                        </label>
                        <input required type="text" value={telefone} onChange={(evento) => setTelefone(evento.target.value)} />
                    </div>
                </div>
                {notas.map((nota, index) => (
                    <div className="secao3">
                        <div className='notas' key={index}>
                            <div>
                                <label>
                                    Nota 1
                                </label>
                                <input
                                    type="number"
                                    value={nota.nota01 !== null ? parseFloat(nota.nota01) : ""}
                                    onChange={(evento) => handleNotaChange(index, 'nota01', evento.target.value)}
                                    min="0"
                                    max="10"
                                    required
                                />
                            </div>
                            <div>
                                <label>
                                    Nota 2
                                </label>
                                <input
                                    type="number"
                                    value={nota.nota02 !== null ? parseFloat(nota.nota02) : ""}
                                    onChange={(evento) => handleNotaChange(index, 'nota02', evento.target.value)}
                                    min="0"
                                    max="10"
                                    required
                                />
                            </div>
                            <div>
                                <label>
                                    Nota 3
                                </label>
                                <input
                                    type="number"
                                    value={nota.nota03 !== null ? parseFloat(nota.nota03) : ""}
                                    onChange={(evento) => handleNotaChange(index, 'nota03', evento.target.value)}
                                    min="0"
                                    max="10"
                                    required
                                />
                            </div>
                        </div>
                        <div className="secao3__botao__alterarformulario">
                            <button type="button" onClick={alterar}>
                                Alterar
                            </button>
                        </div>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default AlterarFormulario;