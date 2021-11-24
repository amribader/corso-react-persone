import './persone.css';
import { persone } from '../mock/persone';

function Comandi({ num }) {
    let count = 5;
    const handleAdd = ()=> count++;
    return (
        <div className="">
            <button onClick={handleAdd} >Ordina</button>
            <span>count = {count}</span>
            <span>num = {num}</span>
        </div>
    );
}

export default Comandi;