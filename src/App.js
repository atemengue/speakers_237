/** @format */

import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Message from './components/Message';
import About from './components/About';
import Donate from './Donate';
import SpeakerDetail from './components/SpeakerDetails';

export const SpeakerContext = React.createContext();

function App() {
  const [term, setTerm] = useState();
  const confValue = { showCheckbox: true };

  return (
    <SpeakerContext.Provider value={confValue}>
      <Header />
      <div className='ui hidden divider' />
      <Routes>
        {/* Home */}
        <Route path='/' element={<Home />} />
        {/* Message */}
        <Route path='/messages' element={<Message />} />

        {/* A propos*/}
        <Route path='/about' element={<About />} />

        {/* Speaker Details */}
        <Route path='/speakers' element={<SpeakerDetail />}>
          <Route path=':idSpeaker' element={<SpeakerDetail />} />
        </Route>

        {/*  Faire un don*/}
        <Route path='/donate' element={<Donate />} />
        {/* 404 Page d'erreur */}
      </Routes>
      <div className='ui divider' />
      <Footer />
    </SpeakerContext.Provider>
  );
}

export default App;
