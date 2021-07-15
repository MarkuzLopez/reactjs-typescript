import { useState } from "react";

interface User {
    uid: string,
    name: string,
    email: string
}

export const Usuario = () => {

    const [user, setuser] = useState<User>();
    
    const login = () => {
        setuser({ 
            uid: '12445',
            name: 'Markuz',
            email: 'mar1@gmail.com'
        })
    }

    return (
        <div>
           <h2>Usuario: useState: </h2> 
           <br />
           <button onClick={ login } >Login</button>

           <pre>
               { JSON.stringify( user ) } 
           </pre>
        </div>
    )
}
