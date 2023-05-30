import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Páginas(componentes)
import Inicio from './routes/Inicio';
import Adicionar from './routes/Adicionar';

// Importando algumas utilizações do Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Criar objeto de configuração de roteamento
const router = createBrowserRouter([
  {
    // Passar qual é o elemento principal, App que renderiza por padrão a Navegacao e o Outlet (conteúdo)
    element: <App />,

    // Criando as rotas
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/adicionar",
        element: <Adicionar />
      }
    ]
  }
]);

// Renderização de tudo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);