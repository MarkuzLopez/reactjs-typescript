import { useState } from "react"

export const Counter = () => {

const [counter, setcounter] = useState(0);

const incrementar = (numero: number = 1): void => {
    console.log('entra funcion', numero);
    setcounter(counter + numero)
}

    return (
        <div>
          <h3>Counter: </h3>
          <span>Valor: {counter}</span>
          <br />
          <button onClick={ () => incrementar() } >Incrementar 1</button>
          <button onClick={ () => incrementar(2) } >Incementar dos </button>
          <button onClick={ () => setcounter(0) } > Resetear </button>
        </div>
    )
}
