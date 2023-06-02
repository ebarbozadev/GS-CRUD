import React, { useEffect, useState } from 'react';
import styles from './Tabela.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Tabela() {
    const navegar = useNavigate();

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const pegarUsuarios = async () => {
            try {
                const resposta = await axios.get(
                    'http://servidorlocal.gerencesistemas.com.br:253/candidatos'
                );
                const data = resposta.data;
                setUsuarios(data);
                console.log(data); // Verifique os dados retornados pela API aqui
            } catch (erro) {
                console.log(erro);
            }
        };

        pegarUsuarios();
    }, []);

    const excluirUsuario = async (codCandidato) => {
        try {
            await axios.delete(
                'http://servidorlocal.gerencesistemas.com.br:253/candidatos',
                { headers: { codCandidato } }
            );
            // Atualize a lista de usuários após a exclusão
            const novaLista = usuarios.filter((usuario) => usuario.codCandidato !== codCandidato);
            setUsuarios(novaLista);
            navegar('/');
        } catch (erro) {
            console.log(erro);
        }
    };

    const alterarUsuario = (codCandidato) => {
        // Lógica para redirecionar para a página de alteração com o ID do usuário
        navegar(`/alterar`);
      };

    if (usuarios.length === 0) {
        return null; // Retorna null se não houver usuários
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Telefone</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota 3</th>
                    <th>Estado</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario) => (
                    <tr key={usuario.codCandidato}>
                        <td className={styles.codCandidato}>{usuario.codCandidato}</td>
                        <td>{usuario.nomeCandidato}</td>
                        <td>{usuario.cpf}</td>
                        <td>{usuario.telefone}</td>
                        {usuario.Notas.map((nota) => (
                            <React.Fragment key={nota.idCandidato}>
                                <td className={styles.nota01}>{nota.nota01}</td>
                                <td className={styles.nota02}>{nota.nota02}</td>
                                <td className={styles.nota03}>{nota.nota03}</td>
                            </React.Fragment>
                        ))}
                        <td className={styles.estado}>Aprovado</td>
                        <td className={styles.botoes}>
                            <button
                                className={styles.alterar_btn}
                                onClick={() => alterarUsuario(usuario.codCandidato)}
                            >
                                Alterar
                            </button>{" "}
                            <button className={styles.excluir_btn} onClick={() => excluirUsuario(usuario.codCandidato)}>
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}