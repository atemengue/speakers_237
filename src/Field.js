/** @format */

import React, { useState } from 'react';

const Field = () => {
  const [term, setTerm] = useState('information');

  function onChangeInput(event) {
    setTerm(event.target.value);
  }

  return (
    <div style={{ marginTop: '10px', marginBottom: '10px' }} class='ui input'>
      <input
        value={term}
        onChange={onChangeInput}
        type='text'
        placeholder='Search...'
      />
      <div>valeur: {term}</div>
    </div>
  );
};

export default Field;
