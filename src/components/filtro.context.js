import React, { useState, createContext } from 'react';

export const FiltroContext = createContext({
    filtro: '',
    setFiltro: filtro => { }
});

export default function FiltroProvider(props) {
    // Set up state
    const [filtro, setFiltro] = useState([]);

    // Update state method

    // Set up Provider with state data
    return (
        <FiltroContext.Provider value={{
            cart: filtro,
            addToCart: setFiltro
        }}>
            {props.children}
        </FiltroContext.Provider>
    )
}

/* come usarla
import { useContext } from 'react';
import { FiltroContext } from 'filtro.Context';


export default function CartIcon() {
    const { filtro, setFiltro } = useContext(FiltroContext);
    const qty = (cart && cart.length > 0) ? "(" + cart.length + ")" : "";

    return (
<span>{filtro}</span>
  <input onChange={e=>setFiltro(e.target.value)} />
    )
} */