import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navegacao from './componentes/Navegacao';
import Tabela from './componentes/Tabela';
import Adicionar from './routes/Adicionar';

function App() {
  return (
    <div className="App">
      <Navegacao />
      <div className="App">
        <Outlet />
        <Routes>
          <Route path="/" element={<Tabela />} />
          <Route path="/Adicionar" element={<Adicionar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;