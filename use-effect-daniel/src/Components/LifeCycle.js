import React, {useState, useEffect} from 'react';


const LifeCycle = () => {
    
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(()=>{
        console.log('useEffect con []');
    },[]);

    useEffect(()=>{
        console.log('UseEffect no dependencies');
    })

    useEffect(()=>{

        console.log('useEffect [counter1]');

    },[counter1]);

    useEffect(()=>{
        console.log('useEffect [counter2]');
    },[counter2]);

    useEffect(()=>{
        console.log('useEffect [counter1, counter2]')
    },[counter1, counter2])



    const aumentarCounter1 = () => {
        setCounter1(counter1+1);
    }

    const aumentarCounter2 = () => {
        setCounter2(counter2+1);
    }
    
    return (

        <div>

            <h1>Clicks: {counter1}</h1>
            <h1>Clicks: {counter2}</h1>
            <button onClick={aumentarCounter1}>Aumentar counter1</button>
            <button onClick={aumentarCounter2}>Aumentar counter2</button>
            
        </div>
    )
}

export default LifeCycle;
