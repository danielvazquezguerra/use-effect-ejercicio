import React, {useState} from 'react'
import getUser from '../helpers/getUser';

const FetchCard = () => {

    const initialUser = {
        name: "Daniel",
        email: "daniel.vazquezguerra@gmaill.com",

    }
    
    const [user, setUser] = useState(initialUser)

    
    return (

        <div>

            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            
        </div>
    )
}

export default FetchCard;
