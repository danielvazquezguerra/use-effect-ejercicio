
import './App.scss';
import React, {useState} from 'react';
// import Contador from './Components/contador';
// import MostrarColor from './Components/mostrar-color';
import LifeCycle from './Components/LifeCycle';
import Nosotros from './Components/Nosotros';
// import FetchCard from './Components/FetchCard';
// import Resize from './Components/Resize';

function App() {

  // const [mostrar, SetMostrar] = useState(true);
  const [show, setShow] = useState(false);

  // const mostrarOcultar = () => {
  //   SetMostrar(!mostrar);
  // }

  const mostrarComponente = () => {
    setShow(!show);
}


  return (

    <div className="App">

      <button onClick={mostrarComponente}>Mostrar/Ocultar</button>

      {
        show && <LifeCycle />
      }

      <Nosotros />


      {/* <FetchCard /> */}

          {/* <button onClick={mostrarComponente}>mostrar/ocultar</button>

          {
            show && <Resize title="Resize" show={show}/>
          } */}

      

      {/* <Contador />

      <button onClick={mostrarOcultar}>Mostrar/Ocultar</button>

      {
        mostrar ? <MostrarColor /> : null
      } */}
  
    </div>
  );
}

export default App;
