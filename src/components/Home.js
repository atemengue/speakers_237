/** @format */

import React, { useState } from 'react';
import Field from './Field';
import Speakers from './Speakers';

const Home = () => {
  const [term, setTerm] = useState('');
  return (
    <div className='ui container'>
      <Field onChange={setTerm} value={term} label='Tapez votre clavier' />
      <div className='ui divider'></div>
      <Speakers />
    </div>
  );
};

export default Home;
