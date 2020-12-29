import React, {useState, useEffect} from 'react'

const Contador = () => {

    const [cuenta, setCuenta] = useState(0)

    useEffect(()=>{
     console.log(`Esta es la cuenta desde useEffect: ${cuenta}`);
    });

    const aumentarCuenta = () => {
        setCuenta(cuenta + 1);
    }

    console.log(`Esta es la cuenta desde fuera: ${cuenta}`)

    return (

        <div>

            <h1>La cuenta es: {cuenta}</h1>
            <button onClick={aumentarCuenta}>Aumentar</button>
            
        </div>
    )
}

export default Contador; 
