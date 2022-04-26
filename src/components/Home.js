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

      <div class='ui segment' id='example1'>
        <div class='left ui rail'>
          <p></p>
          <p></p>
          <p></p>
          <div
            class='ui sticky'
            style={{
              width: '272px',
              height: '500',
              background: 'red',
              left: '300',
            }}
            // style='width: 272px !important; height: 262.672px !important; left: 275.5px;'
          >
            <h3 class='ui header'>Stuck Content</h3>
            <img alt='' />
          </div>
        </div>
        <div class='right ui rail'>
          <div
            class='ui sticky'
            // style={{'width: 272px !important; height: 262.672px !important; left: 1357.5px;'}}
          >
            <h3 class='ui header'>Stuck Content</h3>
            <img alt='' />
          </div>
        </div>
        <div style={{ height: 20000 }}>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
