/** @format */

import React from 'react';

export default function Header() {
  return (
    <div>
      <div>
        <img
          className='ui image'
          alt='logo speakers 237'
          src='/images/banner.png'
        />
      </div>
      <div className='ui huge menu'>
        <span to='/' className='active item'>
          Acceuil
        </span>
        <span to='/message' className='item'>
          Laisser un message{' '}
        </span>
        <span to='/about' className='item'>
          A propos
        </span>
        <div class='right menu'>
          <span to='/about' className='item'>
            Faire un don
          </span>
        </div>
      </div>
    </div>
  );
}
