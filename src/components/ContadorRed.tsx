import { useReducer } from "react";

const initialState = {
    contador: 0
}

type ActionType = { type: 'incrementar'} | { type: 'decrementar' };

const contadorReducer = ( state: typeof initialState, action: ActionType ) => {

    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        
        case 'decrementar':
            return { 
                ...state,
                contador: state.contador - 1 
            }
    
        default:
            return state;
    }
}

export const ContadorRed = () => {

    const [contadorState, dispatch  ] = useReducer(contadorReducer, initialState);

    const incrementar = () => { 
        dispatch({ type: 'incrementar' })
    }

    const decrementar = () => { 
        dispatch({ type: 'decrementar' })
    }
    
    return (
        <>
            <h2>Contador: {contadorState.contador}</h2>
            <br />
            <button onClick={ () => incrementar() } >Incrementar +1</button>
            <button onClick={ () => decrementar()} >decrementar - 1</button> 
        </>
    )
}