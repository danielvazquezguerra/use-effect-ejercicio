import React, {useState, useEffect} from 'react'
import getUser from '../helpers/getUser';
import getPosts from '../helpers/getPosts';

const FetchCard = () => {
    
    // const initialUser = {
    //     name: "Daniel",
    //     email: "daniel.vazquezguerra@gmaill.com",

    // }

    // const initialPosts = [
    //     {id: 1, title: "Post 1"},
    //     {id: 2, title: "Post 2"}
    // ];
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    

    const updateUser = () => {

        getUser()
        .then((newUser)=> {
            setUser(newUser);
        })

    }

    const updatePosts = () => {

        getPosts()
        .then((newPosts)=>{
            setPosts(newPosts);
        })

    }

    useEffect(() => {
      updateUser();
    
    }, [])

    useEffect(() => {
      updatePosts();
    }, [user])
    

    
    return (

        <div>

            <h1>{user.name}</h1>
            <h2>{user.email}</h2>

            <h2>Posts - user: {user.id}</h2>

                <ul>
                    {
                    
                        posts.map(post =>(

                            <li key={post.id}>{post.name}</li>
                            
                        ))
                    
                    }
                </ul>

                <button onClick={updateUser}>Otro usuario</button>
            
        </div>
    )
}

export default FetchCard;
