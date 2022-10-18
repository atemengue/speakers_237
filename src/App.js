/** @format */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Donate from './components/Donate';
import Home from './components/Home';
import Messages from './components/Messages';
import Field from './Field';
import Footer from './Footer';
import Header from './Header';
import SpeakerInfo from './SpeakerInfo';
import SpeakerList from './SpeakerList';

function App() {
  return (
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
  );
}

export default App;
