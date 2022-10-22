/** @format */

import React, { useState } from 'react';
import api from '../api';

export default function Message() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const cleanInput = () => {
    setEmail('');
    setMessage('');
  };
  const sendMessage = (event) => {
    event.preventDefault();
    setIsLoading(true);
    api
      .post('/messages', { id: 4, email: email, message: message })
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false);
          cleanInput();
        }, 2000);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <div className='ui container'>
      <div>email: {email}</div>
      <div>message: {message}</div>
      <h3 className='ui header'>Message</h3>
      <form className='ui form'>
        <div className='field'>
          <label>Email</label>
          <input
            value={email}
            onChange={onEmailChange}
            type='email'
            name='email'
            placeholder='Votre email'
          />
        </div>
        <div class='field'>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows='2'
          ></textarea>
        </div>
        <button
          onClick={(e) => sendMessage(e)}
          className={`ui button ${isLoading ? 'loading' : ''}`}
          type='submit'
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
