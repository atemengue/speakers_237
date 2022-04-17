/** @format */

import React, { useState } from 'react';
import Field from './components/Field';
import Footer from './components/Footer';
import Header from './components/Header';
import Speakers from './components/Speakers';

export const SpeakerContext = React.createContext();

function App() {
  const [term, setTerm] = useState();
  const confValue = { showCheckbox: true };

  return (
    <SpeakerContext.Provider value={confValue}>
      <div className='ui container'>
        <Header />
        <div class='ui hidden divider'></div>
        <Field onChange={setTerm} value={term} label='Tapez votre clavier' />
        <div className='ui divider'></div>
        <Speakers />
      </div>
      <div class='ui divider'></div>
      <Footer />
    </SpeakerContext.Provider>
  );
}

export default App;
