/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import axios from 'axios';






const AxiosDaniel = () => {

    const initialPosts = {};

    const [posts, setPosts] = useState(initialPosts); 



    useEffect( () => {
        
       const allPosts = axios ({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/todos/1`,
        })
        .then(res => setPosts(res.data))

        console.log(posts.data);
        
        
    }, [])
    


    return (

        <div>


            
        </div>
    )
}

export default AxiosDaniel;
