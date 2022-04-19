/** @format */

import React from 'react';

export default function Donate() {
  return (
    <div className='ui container'>
      <h1 className='ui header'>Faire un don</h1>
      <form className='ui form'>
        <div className='field'>
          <label>Email</label>
          <input type='text' name='first-name' placeholder='First Name' />
        </div>
        <div class='two fields'>
          <div class='field'>
            <label>Somme</label>
            <select class='ui fluid dropdown'>
              <option value=''>500 FCFA</option>
              <option value='AL'>1000 FCFA</option>
              <option value='AK'>2000 FCFA</option>
              <option value='AZ'>10000 FCFA</option>
            </select>
          </div>
        </div>
        <button className='ui button' type='submit'>
          Envoyer
        </button>
      </form>
    </div>
  );
}
