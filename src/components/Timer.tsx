import { useEffect } from "react"
import { useState } from "react"

type timeArgs = { 
    milisegundos: number
}

export const Timer = (argumento: timeArgs) => {

    const [timer, settimer] = useState(0);
    console.log(argumento.milisegundos);
    

    useEffect(() => {
       // setInterval( () => settimer(s => s + 1), 1000 )
    }, [])
    return (
        <>
            <h4>Timer: <small>{ timer }</small></h4>
        </>
    )
}
