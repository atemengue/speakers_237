/** @format */

import React from 'react';

const Header = () => {
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
        <a href='#' className='item'>
          Acceuil
        </a>
        <a href='#' className='item'>
          Laisser un message
        </a>
        <a href='#' className='item'>
          A propos
        </a>
        <div class='right menu'>
          <a href='#' className='item'>
            Faire un don
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
