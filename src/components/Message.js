/** @format */

import React from 'react';

export default function Message() {
  return (
    <div className='ui container'>
      <h3 className='ui header'>Message</h3>
      <form className='ui form'>
        <div className='field'>
          <label>Email</label>
          <input type='text' name='first-name' placeholder='First Name' />
        </div>
        <div class='field'>
          <label>Message</label>
          <textarea rows='2'></textarea>
        </div>
        <button className='ui button' type='submit'>
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
