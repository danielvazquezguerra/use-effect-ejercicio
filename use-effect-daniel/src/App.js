
import './App.scss';
import Contador from './Components/contador';
import MostrarColor from './Components/mostrar-color';
import React, {useState} from 'react';
import LifeCycle from './Components/LifeCycle';
import FetchCard from './Components/FetchCard';
import Resize from './Components/Resize';

function App() {

  const [mostrar, SetMostrar] = useState(true);
  const [show, setShow] = useState(true);

  const mostrarOcultar = () => {
    SetMostrar(!mostrar);
  }

  const mostrarComponente = () => {
    setShow(!show);
}


  return (
    <div className="App">

      {/* <LifeCycle />

      <FetchCard /> */}

          <button onClick={mostrarComponente}>mostrar/ocultar</button>

          {
            show && <Resize title="Resize" show={show}/>
          }

      

      {/* <Contador />

      <button onClick={mostrarOcultar}>Mostrar/Ocultar</button>

      {
        mostrar ? <MostrarColor /> : null
      } */}
  
    </div>
  );
}

export default App;
