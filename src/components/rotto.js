import './persone.css'
import { persone as personeData } from '../mock/mock'
import React, { useEffect, useState } from 'react'

//const sortImmutable = (list, cb) = [...list].sort(cb)
//da spostare su lib
//IMMUTABLE
//ci serve per ottenere il nome, se fossero numeri basterebbe a - b
const ordinaStringhe = (a,b) => a < b ? -1 : a > b ? 1 : 0
function Persone({lista, ...restProps}){
    const [persone, setPersone] = useState([...personeData])
    const [filtro, setFiltro] = useState('')
    /*console.log('sto renderizzando persone');
    const effectStart = ()=>{
        console.log('effect start');
    },
    [],
    useEffect(effectStart, [])

    const effectFilter = ()=>{
        handleFilter()
        console.log('effect start');
    },
    []),
    useEffect(effectStart, [])*/


    //const [msg, setMsg] = useState('');
   // console.log('esecuzione persone');
   // let msg = 'sono il messaggio'
   // setTimeout(() => msg = ('settato'), 5000)
   const handleOrdina =  (field) => {
    //  alert('ordina Stringhe')
      
      const ordinaPersone = (a, b) => ordinaStringhe(a[field], b[field])
   //   const personeOrdinate = persone.sort(ordinaPersone); 
   const personeOrdinate = [...persone].sort(ordinaPersone); //capisco senza prendere il valore di ritorno che sort si applica su persone
   setPersone([...personeOrdinate])
 //  console.log(personeOrdinate); 
}
   /* const handleOrdina =  e => {
      //  alert('ordina Stringhe')
        
        const ordinaPersone = (a, b) => ordinaStringhe(a.nome, b.nome)
     //   const personeOrdinate = persone.sort(ordinaPersone); 
     const personeOrdinate = [...persone].sort(ordinaPersone); //capisco senza prendere il valore di ritorno che sort si applica su persone
     setPersone(personeOrdinate) *///se mi dimentico di clonare l'array sopra, lo clono sotto
    //  per tornare allo stato originario gli passiamo l'array dei dati originario personeData
  //      const personeDisordinate = personeData.sort(ordinaPersone); 
    //    setPersone([...personeOrdinate]) //ha clonato l'array, il sort scambia gli elementi all'interno dell'array stesso
    //anche il push restiruisce lo stesso array
      

    /*const handleFilter = e => {
        const personeFiltrate = persone.filter(persona => persona.city === 'pavia')
        setPersone(personeFiltrate) //con filter lo prende perchè filter restituisce un array nuovo, quindi non è necessario clonare l'array però per convenzione si dovrebbe fare   setPersone([...personeFiltrate])
        //anche map dà un array nuovo, il filter è un map con un filtro
    }*/
    //-1 significa che non trova l'indice
 //   const filtraCity = (persona, city) => persona.city.toLowerCase().indexOf(filtro.toLowerCase()) > -1
    const filtraCity = (value, toFind) => value.toLowerCase().indexOf(toFind.toLowerCase()) > -1;
    const handleFilter = () => {
    //    const personeFiltrate = persone.filter(persona => persona.city.toLowerCase() === filtro.toLowerCase())
    // > -1 significa che lo ha trovato
   // const personeFiltrate = [...personeData].filter(persona => persona.city.toLowerCase().indexOf(filtro.toLowerCase()) > -1)
   const personeFiltrate = [...personeData].filter(persona => filtraCity(persona.city, filtro) 
   || filtraCity(persona.nome, filtro )
   || filtraCity(persona.natoIl, filtro )
   );
        setPersone([...personeFiltrate])
    }
    const handleReset = () => {
        setPersone(personeData) ;
    }

    const handleTextFilter = (event) =>{
        const value = event.target.value;
        console.log('value', value);
        setFiltro(value);
        handleFilter();
    }
    const renderPersona = (persona, index) => {
        return (
            <tr key = {index}>
                <td><span>{persona.nome}</span></td>
                <td><span>{persona.city}</span></td>
                <td><span>{persona.natoIl}</span></td>
            </tr>
        );
    };
    
        <div className = "App">
            <header className = "">
                Persone xxx {/*{msg}*/}
                
        <div className = "">
           <input type = "text" onChange={e =>handleTextFilter}/>
           <button onClick={()=>handleFilter}>Filtra per città</button> 
            </div>
            <button onClick={handleReset}>Reset</button>
           
            </header>
            <div>
            <table className = "styled-table">
                <thead>
                <tr>
                    <th>Nome  <button onClick={()=>handleOrdina('nome')}>Ordina</button></th>
                   
                    <th>City  <button onClick={()=>handleOrdina('city')}>Ordina</button></th>
                    <th>Nato il  <button onClick={()=>handleOrdina('natoIl')}>Ordina</button></th>
                    
                </tr>
                </thead>
                <tbody>
                {persone.map(renderPersona)}
                </tbody>
            </table>
            </div>
        </div>
        
    );
}
export default Persone;