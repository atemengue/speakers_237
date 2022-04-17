/** @format */

import React, { useState } from 'react';
import Field from './components/Field';
import Speakers from './components/Speakers';

export const SpeakerContext = React.createContext();

function App() {
  const [term, setTerm] = useState();

  const confValue = { showCheckbox: true };
  return (
    <SpeakerContext.Provider value={confValue}>
      <div className='ui container'>
        <Field onChange={setTerm} value={term} label='Tapez votre clavier' />
        <div className='ui divider'></div>
        <Speakers />
      </div>
    </SpeakerContext.Provider>
  );
}

export default App;
