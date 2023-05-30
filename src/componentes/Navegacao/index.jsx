import React from 'react';
import { Link } from 'react-router-dom';

// Importando estilização
import styles from './Navegacao.module.css';

export default function Navegacao() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Cadastrados</Link></li>
                    <li><Link to="/Adicionar">Adicionar</Link></li>
                </ul>
            </nav>
        </header>
    );
}