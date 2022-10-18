/** @format */

import React, { useState } from 'react';

const Field = () => {
  const [term, setTerm] = useState('');

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
    </div>
  );
};

export default Field;
