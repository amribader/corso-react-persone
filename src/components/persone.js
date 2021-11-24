import './persone.css';
import { persone as personeData} from '../mock/persone';
import React, { useState, useEffect } from 'react';

// TODO: da spostare su util

// const sortImmutable = (list, cb) = [...list].sort(cb);

const ordinaStringhe =  (a,b) => a<b ? -1 : a>b ? 1 : 0;

function Persone({filtro}) {
    const [persone, setPersone] = useState([...personeData]);
    // const [filtro, setFiltro] = useState('');

    console.log('sto costruendo Persone');

    const effectStart = ()=>{
        console.log('effect Persone Start');
    }
    const effectfiltro = ()=>{
        filtro.length >1 && handleFilter();
        console.log('effect Persone effectfiltro');
    }

    useEffect(effectStart , []); // effect Start solo 1 volta
    useEffect(effectfiltro , [filtro]);

    const handleOrdina = (field) => {
        const ordinaPersone = (a, b) => ordinaStringhe(a[field], b[field]);
        const personeOrdinate = [...persone].sort(ordinaPersone); // capisco senza prendere il valore di ritorno che sort si applica su persone

        // console.log('fff', personeOrdinate);

         // NOTA BENE  personeOrdinate
        setPersone([...personeOrdinate]);
    }

    const filtraValues = (value, toFind) => value.toLowerCase().indexOf(toFind.toLowerCase()) > -1;

    const handleFilter = () => {
        const personeFiltrare = [...personeData].filter(persona =>
            filtraValues(persona.city, filtro)
            || filtraValues(persona.nome, filtro)
            || filtraValues(persona.natoIl, filtro)
            );

        /* const personeFiltrare = [...personeData].filter(persona =>
            filtraValues(persona.city, filtro)
            || filtraValues(persona.nome, filtro)
            || filtraValues(persona.natoIl, filtro)
        ); */

       /*  const personeFiltrare = [...personeData].filter(persona =>{
            const keys=Object.keys(persona);
            let isFound=false;
            for(let i; i<keys.length; i++){
                const fieldVal = persona[keys[i]];
                if (filtraValues(fieldVal, filtro)) return true;
            }
            return false
        } ); */

        setPersone([...personeFiltrare]);
    }

    const handleReset = ()=>{
        setPersone(personeData);
    }

  /* const personeFiltrare = [...personeData].filter(persona =>{
            const keys=Object.keys(persona);
            let isFound=false;
            for(let i; i<keys.length; i++){
                const fieldVal = persona[keys[i]];
                if (filtraValues(fieldVal, filtro)) return true;
            }
            return false
        }) ); 
*/

    const renderPersone = (persona, index) => {
        return (
            <tr key={index}>
                <td><span>{persona.nome}</span></td>
                <td><span>{persona.city}</span></td>
                <td><span>{persona.natoIl}</span></td>
            </tr>);
    };

    return (
        <div className="App">
            <header className="">
            </header>
            <div>
                <div>
                    <button onClick={()=>handleReset()} >reset</button>
                </div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>nome <button onClick={()=>handleOrdina('nome')} >Ordina</button> </th>
                            <th>City <button onClick={()=>handleOrdina('city')} >Ordina</button> </th>
                            <th>Nato il <button onClick={()=>handleOrdina('natoIl')} >Ordina</button> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {persone.map(renderPersone)}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default Persone;