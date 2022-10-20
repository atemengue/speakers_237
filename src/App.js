/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Donate from './components/Donate';
import Home from './components/Home';
import Messages from './components/Messages';
import { CheckBoxContext } from './context/CheckBoxContext';
import Field from './Field';
import Footer from './Footer';
import Header from './Header';
import SpeakerInfo from './SpeakerInfo';
import SpeakerList from './SpeakerList';

function App() {
  return (
    <CheckBoxContext.Provider
      value={{
        checkbox: true,
        tab: [2, 4, 5],
        fn: function (a, b) {
          return a + b;
        },
      }}
    >
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about ' element={<About />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/speakers/:id' element={<SpeakerInfo />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </CheckBoxContext.Provider>
  );
}

export default App;
