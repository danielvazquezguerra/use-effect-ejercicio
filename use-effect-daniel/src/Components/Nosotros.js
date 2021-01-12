import React, {useState, useEffect} from 'react';



const Nosotros = () => {

    const [mostrar, setMostrar] = useState(false);

    const mostrarElemento = () => {

        setMostrar(!mostrar);

    }

    useEffect(() => {


      
    }, [mostrar])


    return (

        <div>

            <button onClick={mostrarElemento}>mostrar/ocultar</button>

            {
                mostrar &&   <h1>Hola Nosotros!</h1>
            }

          
            
        </div>
    )
}

export default Nosotros;
