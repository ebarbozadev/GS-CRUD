import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../CampoFormulario/campoFormulario.css';

export default function AlterarFormulario() {
    const location = useLocation();
    const [nomeCandidato, setNomeCandidato] = useState('');
    const [cpf, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nota01, setNota01] = useState('');
    const [nota02, setNota02] = useState('');
    const [nota03, setNota03] = useState('');

    useEffect(() => {
        // Verificar se os dados do candidato foram passados pelo estado
        const searchParams = new URLSearchParams(location.search);
        const codCandidato = searchParams.get('codCandidato');

        if (codCandidato) {
            const pegarCandidato = async () => {
                try {
                    const resposta = await axios.get(
                        `http://servidorlocal.gerencesistemas.com.br:253/candidatos/${codCandidato}`
                    );
                    const candidato = resposta.data;
                    setNomeCandidato(candidato.nomeCandidato);
                    setCPF(candidato.cpf);
                    setTelefone(candidato.telefone);
                    setNota01(candidato.Notas[0].nota01.toString());
                    setNota02(candidato.Notas[0].nota02.toString());
                    setNota03(candidato.Notas[0].nota03.toString());
                } catch (erro) {
                    console.log(erro);
                }
            };

            pegarCandidato();
        }
    }, [location]);

    const enviarAlteracaoAPI = async () => {
        const candidato = location.state && location.state.candidato;

        if (candidato) {
            const codCandidato = candidato.codCandidato;

            const payload = {
                codCandidato,
                nomeCandidato,
                cpf,
                telefone,
                Notas: [
                    {
                        idCandidato: candidato.Notas[0].idCandidato,
                        nota01: parseFloat(nota01),
                        nota02: parseFloat(nota02),
                        nota03: parseFloat(nota03),
                    },
                ],
            };

            try {
                await axios.put(`http://servidorlocal.gerencesistemas.com.br:253/candidatos/${codCandidato}`, payload);
                alert('Alteração enviada com sucesso!');
            } catch (error) {
                alert('Ocorreu um erro ao enviar a alteração. Por favor, tente novamente.');
            }
        }
    };

    const handleFormSubmit = (evento) => {
        evento.preventDefault();
        enviarAlteracaoAPI();
    };

    return (
        <div className="formulario">
            <form onSubmit={handleFormSubmit} className="campo-formulario">
                {/* Campos de entrada para os dados do usuário */}
                <div className="secao1">
                    <label htmlFor="nomeCandidato">Nome do Candidato</label>
                    <input
                        value={nomeCandidato}
                        onChange={(evento) => setNomeCandidato(evento.target.value)}
                        required
                        type="text"
                        name="nomeCandidato"
                        id=".
                    nomeCandidato"
                    />

                    <label htmlFor="cpf">CPF</label>
                    <input
                        value={cpf}
                        onChange={(evento) => setCPF(evento.target.value)}
                        required
                        type="text"
                        name="cpf"
                        id="cpf"
                    />

                    <label htmlFor="telefone">Telefone</label>
                    <input
                        value={telefone}
                        onChange={(evento) => setTelefone(evento.target.value)}
                        required
                        type="text"
                        name="telefone"
                        id="telefone"
                    />
                </div>

                {/* Campos de entrada para as notas */}
                <div className="secao2">
                    <label htmlFor="nota01">Nota 1</label>
                    <input
                        value={nota01}
                        onChange={(evento) => setNota01(evento.target.value)}
                        required
                        type="text"
                        name="nota01"
                        id="nota01"
                    />

                    <label htmlFor="nota02">Nota 2</label>
                    <input
                        value={nota02}
                        onChange={(evento) => setNota02(evento.target.value)}
                        required
                        type="text"
                        name="nota02"
                        id="nota02"
                    />

                    <label htmlFor="nota03">Nota 3</label>
                    <input
                        value={nota03}
                        onChange={(evento) => setNota03(evento.target.value)}
                        required
                        type="text"
                        name="nota03"
                        id="nota03"
                    />
                </div>

                {/* Botão de envio */}
                <button type="submit">Enviar Alteração</button>
            </form>
        </div>
    );
}