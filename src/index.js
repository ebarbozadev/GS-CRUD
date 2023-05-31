import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importando algumas utilizações do Router
import { BrowserRouter } from "react-router-dom";

// Criar objeto de configuração de roteamento
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);