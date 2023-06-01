import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navegacao from './componentes/Navegacao';
import Inicio from './routes/Inicio.jsx'
import Adicionar from './routes/Adicionar';
import AlterarFormulario from './componentes/Tabela/AlterarFormulario';

function App() {
  return (
    <div className="App">
      <Navegacao />
      <div className="App">
        <Outlet />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Adicionar" element={<Adicionar />} />
          <Route path="/alterar" element={<AlterarFormulario />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;