import React from 'react';
import './App.css';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className='linha'>
      <Intervalo></Intervalo>
      </div>
      <div className='linha'>
      <Sorteio></Sorteio>
      <Media prop1="" prop2=""></Media>
      <Soma></Soma>
      </div>
    </div>
  );
}

export default App;
