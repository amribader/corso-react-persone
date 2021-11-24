import './persone.css';
import { persone as personeData} from '../mock/persone';
import React, { useState } from 'react';

// TODO: da spostare su util
const ordinaStringhe =  (a,b) => a<b ? -1 : a>b ? 1 : 0;

function Persone() {
    const [persone, setPersone] = useState(personeData);

    const handleOrdina = () => {
        const ordinaPersone = (a, b) => ordinaStringhe(a.nome, b.nome);
        const personeOrdinate = personeData.sort(ordinaPersone);

        // console.log('fff', personeOrdinate);
        setPersone([...personeOrdinate]);
    }

    const handleFilter = e => {
        const personeFiltrare = persone.filter(persona => persona.city==='pavia');
        setPersone([...personeFiltrare]);
    }

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
                <div className="">
                    <button onClick={handleOrdina} >Ordina</button>
                </div>
                <div className="">
                    <button onClick={handleFilter} >Filtra</button>
                </div>
            </header>
            <div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>nome</th>
                            <th>City</th>
                            <th>Nato il </th>
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