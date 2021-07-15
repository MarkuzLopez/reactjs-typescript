import { useState } from 'react'
import { Timer } from './Timer'

export const TimerFather = () => {

    const [milisegudos, setmilisegudos] = useState(0);
    
    return (
        <div>
            <span>Timer: 1000</span>
            <br />
            <button onClick={() => setmilisegudos(1000) } > 1000 </button>
            <button onClick={() => setmilisegudos(2000) } > 2000 </button>
            {/* <Timer milisegundos={milisegudos} /> */}
        </div>
    )
}
