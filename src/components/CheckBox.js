/** @format */

import React from 'react';

const CheckBox = () => {
  return (
    <div className='ui container'>
      <div className='ui form'>
        <div className='inline fields'>
          <label>Samedi et Dimanche?</label>
          <div className='field'>
            <div className='ui checkbox'>
              <input type='checkbox' name='samedi' />
              <label>Samedi</label>
            </div>
          </div>
          <div className='field'>
            <div className='ui checkbox'>
              <input type='checkbox' name='dimanche' />
              <label>Dimanche</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
