import React, {useState, useEffect, useCallback} from 'react'
import getUser from '../helpers/getUser';
import getPosts from '../helpers/getPosts';

const FetchCard = () => {
    
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    

    const updateUser = () => {

        getUser()
        .then((newUser)=> {
            setUser(newUser);
        })

    }

    const updatePosts = useCallback(() => {

        getPosts(user.id)
        .then((newPosts)=>{
            setPosts(newPosts);
            console.log("hola update");
        })

    },[user.id]);

    useEffect(() => {

      updateUser();
    
    }, [])

    useEffect(() => {

        if (user?.id) {
            updatePosts();
        }
    }, [user, updatePosts])
    

    
    return (

        <div>

            <h1>{user.name}</h1>
            <h2>{user.email}</h2>

            <h2>Posts - user: {user.id}</h2>

                <ul>
                    {
                    
                        posts.map(post =>(

                            <li key={post.id}>
                                <p>{post.title}</p>
                            </li>
                            
                        ))
                    
                    }
                </ul>

                <button onClick={updateUser}>Otro usuario</button>
            
        </div>
    )
}

export default FetchCard;
