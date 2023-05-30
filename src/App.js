// import pegarAPI from './axios/config';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navegacao from './componentes/Navegacao';

function App() {

  return (
    <div className="App">
      {/* Navegação aparecerá por padrão em todas as páginas */}
      <Navegacao />
      <div className='App'>
        {/* Serve para renderizar o conteúdo */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;