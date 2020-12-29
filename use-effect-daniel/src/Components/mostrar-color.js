import React, {useState,useEffect} from 'react';

const MostrarColor = () => {

    const [color, setColor] = useState('orange');

    useEffect(() => {

        function onMouseMove(evento) {

            if (evento.clientX < window.innerWidth / 2 ) {
                setColor('orange');
            }else {
                setColor('blue');
            }

        }
        window.addEventListener('mousemove', onMouseMove);
        console.log('EJECUTANDO');

        return ()=>{
            console.log('LIMPIANDO');
            window.removeEventListener('mousemove', onMouseMove);
        }

    },[]);



    return (
        <div className="MostrarColor" style={{backgroundColor: color}}>

            
        </div>
    )
}

export default MostrarColor;
