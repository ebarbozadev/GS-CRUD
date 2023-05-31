import React from 'react';


// Estilização
import styles from './Tabela.module.css';

export default function Tabela(){
    return(
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
                <tr>
                    <td>01</td>
                    <td>Emanuel Marcos</td>
                    <td>000.000.000-00</td>
                    <td>+55 44 99999-9999</td>
                    <td>9</td>
                    <td>8</td>
                    <td>10</td>
                    <td>Aprovado</td>
                    <td><span className={styles.alterar_btn}>Alterar</span> <span className={styles.excluir_btn}>Excluir</span></td>
                </tr>

                <tr>
                    <td>01</td>
                    <td>Emanuel Marcos</td>
                    <td>000.000.000-00</td>
                    <td>+55 44 99999-9999</td>
                    <td>9</td>
                    <td>8</td>
                    <td>10</td>
                    <td>Aprovado</td>
                    <td><span className={styles.alterar_btn}>Alterar</span> <span className={styles.excluir_btn}>Excluir</span></td>
                </tr>

                <tr>
                    <td>01</td>
                    <td>Emanuel Marcos</td>
                    <td>000.000.000-00</td>
                    <td>+55 44 99999-9999</td>
                    <td>9</td>
                    <td>8</td>
                    <td>10</td>
                    <td>Aprovado</td>
                    <td><span className={styles.alterar_btn}>Alterar</span> <span className={styles.excluir_btn}>Excluir</span></td>
                </tr>
            </tbody>
        </table>
    );
}