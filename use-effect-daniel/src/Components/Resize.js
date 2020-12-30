import React, {useState, useEffect} from 'react';



const Resize = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const isMobile = windowWidth < 768;

    useEffect(() => {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

      return () => {
          console.log('componente desmontado');
      }
    }, []);



    return (

        <div>

            <h1>{props.title}</h1>
            <h2>{windowWidth}</h2>
            {
                isMobile ? <p>Esto es un movil</p> : <p>Es una pc</p>
            }
            
            
        </div>
    )
}

export default Resize;
