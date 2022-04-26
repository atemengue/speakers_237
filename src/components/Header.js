/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <img
        className='ui image'
        alt='logo speakers 237'
        src='/images/banner.png'
      />
      <div className='ui container'>
        <div className='ui mini menu'>
          <Link to='/' className='item'>
            Acceuil
          </Link>
          <Link to='/about' className='item'>
            A propos
          </Link>
          <Link to='/messages' className='item'>
            Laisser un message{' '}
          </Link>
          <div class='right menu'>
            <Link to='/donate' className='item'>
              Joindre la communauté
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
