/** @format */

import React from 'react';
import Field from './Field';
import Footer from './Footer';
import Header from './Header';
import SpeakerList from './SpeakerList';

function App() {
  return (
    <div>
      <Header />
      <Field />
      <SpeakerList />;
      <Footer />
    </div>
  );
}

export default App;
