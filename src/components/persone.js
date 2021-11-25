import './persone.css';
import { persone as personeData } from '../mock/persone';
import React, { useState, useEffect } from 'react';

// TODO: da spostare su util

// const sortImmutable = (list, cb) = [...list].sort(cb);

const ordinaStringhe = (a, b) => a < b ? -1 : a > b ? 1 : 0;

function Persone({ filtro }) {
    const [persone, setPersone] = useState([...personeData]);
    // const [filtro, setFiltro] = useState('');

    const effectStart = () => {
        console.log('effect Persone Start');
    }
    const effectfiltro = () => {
        !filtro.trim() ? setPersone([...personeData]) : filtro.length > 1 && handleFilter();
        console.log('effect Persone effectfiltro');
    }

    useEffect(effectStart, []); // effect Start solo 1 volta
    useEffect(effectfiltro, [filtro]);

    const handleOrdina = (field) => {
        const ordinaPersone = (a, b) => ordinaStringhe(a[field], b[field]);
        const personeOrdinate = [...persone].sort(ordinaPersone); // capisco senza prendere il valore di ritorno che sort si applica su persone

        // console.log('fff', personeOrdinate);

        // NOTA BENE  personeOrdinate
        setPersone([...personeOrdinate]);
    }

    const filtraValues = (value, toFind) => (typeof value === 'string' || typeof value === 'number')  && (value + '').toLowerCase().indexOf(toFind.toLowerCase()) > -1;

    const handleFilter = () => {
        if (!filtro.trim()) return setPersone([...personeData]);
        const personeFiltrare2 = [...personeData].filter(persona =>
            filtraValues(persona.city, filtro)
            || filtraValues(persona.nome, filtro)
            || filtraValues(persona.natoIl, filtro)
        );

        const personeFiltrare3 = [...personeData].filter(persona => {
            const keys = Object.keys(persona);
            for (let i = 0; i < keys.length; i++) {
                const field = keys[i];
                const fieldVal = persona[field];
                if (filtraValues(fieldVal, filtro)) return true;
            }
            return false
        });

        const personeFiltrare1 = [...personeData].filter(persona => {
            for (const[field, value]  of Object.entries(persona)) {
                // if (filtraValues(persona[field], filtro)) return true;
                if (filtraValues(value, filtro)) return true;
            }
            return false
        });

        const personeFiltrare = [...personeData].filter(persona => {
            return Object.keys(persona).map(field => filtraValues(persona[field], filtro))
                // .filter(el=>!!el).length > 0;
                // .filter(el=>!!el).some(el=>true)
                .find(el => !!el)
        });

        const personeFiltrare6 = [...personeData].filter(persona =>
            Object.keys(persona).reduce((acc, field)=>acc || filtraValues(persona[field], filtro),false)
        );

        setPersone([...personeFiltrare]);
    }

    const handleReset = () => {
        setPersone(personeData);
    }

    const renderPersone = (persona, index) => {
        return (
            <tr key={index}>
                <td><span>{persona.id}</span></td>
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
                    <button onClick={() => handleReset()} >reset</button>
                </div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>id <button onClick={() => handleOrdina('id')} >Ordina</button> </th>
                            <th>nome <button onClick={() => handleOrdina('nome')} >Ordina</button> </th>
                            <th>City <button onClick={() => handleOrdina('city')} >Ordina</button> </th>
                            <th>Nato il <button onClick={() => handleOrdina('natoIl')} >Ordina</button> </th>
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