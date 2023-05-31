// import pegarAPI from './axios/config';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navegacao from './componentes/Navegacao';
import Tabela from './componentes/Tabela';
import Adicionar from './routes/Adicionar';

function App() {

  return (
    <div className="App">
      {/* Navegação aparecerá por padrão em todas as páginas */}
      <Navegacao />
      <div className="App">
        {/* Serve para renderizar o conteúdo */}
        <Outlet />
        <Routes>
          <Route path="/" element={<Tabela />} />
          <Route path="/adicionar" element={<Adicionar />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;