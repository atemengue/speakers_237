/** @format */

import React, { useContext } from 'react';
import { CheckBoxContext } from '../context/CheckBoxContext';
import Field from '../Field';
import SpeakerList from '../SpeakerList';
import CheckBox from './CheckBox';

export default function Home() {
  const { checkbox } = useContext(CheckBoxContext);

  return (
    <div className='container ui'>
      <Field />
      {checkbox && <CheckBox />}
      <SpeakerList />
    </div>
  );
}
