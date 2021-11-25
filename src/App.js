import Persone from './components/persone';
import Comandi from './components/comandi';
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [filtro, setFiltro] = useState('');
  const [isPersoneVisible, setIsPersoneVisible] = useState(true);

  const handleTextFilter = (event) => {
    const value = event.target.value;
    setFiltro(value);
  }

  console.log('sono dentro app');

  useEffect(() => {
    console.log('compomnent APP pronto ');
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setIsPersoneVisible(!isPersoneVisible)}>toggle Persone</button>
      </div>
      <div>
        <input onChange={handleTextFilter} />
        {1 === 0 && <Comandi />}
        {isPersoneVisible && <Persone filtro={filtro} />}
      </div>
    </div>
  );
}

export default App;
