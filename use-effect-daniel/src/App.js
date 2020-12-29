
import './App.scss';
import Contador from './Components/contador';
import MostrarColor from './Components/mostrar-color';
import React, {useState} from 'react';
import LifeCycle from './Components/LifeCycle';
import FetchCard from './Components/FetchCard';

function App() {

  const [mostrar, SetMostrar] = useState(true);

  const mostrarOcultar = () => {
    SetMostrar(!mostrar);
  }

  return (
    <div className="App">

      <LifeCycle />

      <FetchCard />

      {/* <Contador />

      <button onClick={mostrarOcultar}>Mostrar/Ocultar</button>

      {
        mostrar ? <MostrarColor /> : null
      } */}
  
    </div>
  );
}

export default App;
