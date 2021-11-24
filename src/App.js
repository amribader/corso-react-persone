import Persone from './components/persone';
import Comandi from './components/comandi';
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [filtro, setFiltro] = useState('');

  const handleTextFilter = (event) => {
    const value = event.target.value;
    setFiltro(value);
  }

  console.log('sono dentro app');

  useEffect(()=>{
    console.log('compomnent APP pronto ');
  } , []);

  return (
    <div className="App">
      <input onChange={handleTextFilter} />
      {1 === 0 && <Comandi />}
  
      <Persone filtro={filtro} />
    </div>
  );
}

export default App;
