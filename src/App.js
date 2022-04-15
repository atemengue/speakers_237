/** @format */

import React, { useState } from 'react';
import Field from './components/Field';
import Speakers from './components/Speakers';

function App() {
  const [term, setTerm] = useState();

  return (
    <div className='ui container'>
      <Field onChange={setTerm} value={term} label='Tapez votre clavier' />
      <div className='ui divider'></div>
      <Speakers />
    </div>
  );
}

export default App;
