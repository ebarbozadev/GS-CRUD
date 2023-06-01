import React from 'react';

import styles from './Tabela.module.css';

export default function Tabela({ usuarios }) {
    if (!Array.isArray(usuarios) || usuarios.length === 0) {
        return <p>Não há usuários cadastrados</p>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Código</th>
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
                        <td>{usuario.codCandidato}</td>
                        <td>{usuario.nomeCandidato}</td>
                        <td>{usuario.cpf}</td>
                        <td>{usuario.telefone}</td>
                        <td>{usuario.Notas[0].nota01}</td>
                        <td>{usuario.Notas[0].nota02}</td>
                        <td>{usuario.Notas[0].nota03}</td>
                        <td>10</td>
                        <td>Aprovado</td>
                        <td>
                            <span className={styles.alterar_btn}>Alterar</span>{' '}
                            <span className={styles.excluir_btn}>Excluir</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}