import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
                nomeCandidato,
                cpf,
                telefone,
                Notas: [
                    {
                        nota01: parseFloat(nota01),
                        nota02: parseFloat(nota02),
                        nota03: parseFloat(nota03),
                    },
                ],
            };

            try {
                const config = {
                    headers: {
                        codCandidato: codCandidato.toString(), // Define o cabeçalho com o ID do candidato
                    },
                };

                // Enviar a alteração para a API
                await axios.put(
                    'http://servidorlocal.gerencesistemas.com.br:253/candidatos',
                    payload,
                    config
                );

                // Exibir uma mensagem de sucesso
                alert('Alteração enviada com sucesso!');
            } catch (error) {
                // Exibir uma mensagem de erro caso ocorra um problema na API
                alert('Ocorreu um erro ao enviar a alteração. Por favor, tente novamente.');
            }
        }
    };




    const handleFormSubmit = (evento) => {
        evento.preventDefault();
        enviarAlteracaoAPI();
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Nome do Candidato:
                <input type="text" value={nomeCandidato} onChange={(e) => setNomeCandidato(e.target.value)} />
            </label>

            <label>
                CPF:
                <input type="text" value={cpf} onChange={(e) => setCPF(e.target.value)} />
            </label>

            <label>
                Telefone:
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            </label>

            <label>
                Nota 01:
                <input type="text" value={nota01} onChange={(e) => setNota01(e.target.value)} />
            </label>

            <label>
                Nota 02:
                <input type="text" value={nota02} onChange={(e) => setNota02(e.target.value)} />
            </label>

            <label>
                Nota 03:
                <input type="text" value={nota03} onChange={(e) => setNota03(e.target.value)} />
            </label>

            <button type="submit">Salvar</button>
        </form>
    );
}