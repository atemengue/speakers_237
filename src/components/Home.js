/** @format */

import React from 'react';
import Field from '../Field';
import SpeakerList from '../SpeakerList';
import CheckBox from './CheckBox';

export default function Home() {
  return (
    <div className='container ui'>
      <Field />
      <CheckBox />
      <SpeakerList />
    </div>
  );
}
