/** @format */

import React from 'react';

const Footer = () => {
  return (
    <div className='ui vertical footer segment'>
      <div className='ui container'>
        <div className='ui stackable inverted divided equal height stackable grid'>
          <div className='three wide column'>
            <h4 className='ui header'>A propos de nous</h4>
            <div className='ui link list'>
              <a href='#' className='item'>
                Equipe
              </a>
              <a href='#' className='item'>
                React Workshop
              </a>
            </div>
          </div>
          <div className='three wide column'>
            <h4 className='ui header'>Laisser nous un message</h4>
            <div className='ui link list'>
              <a href='#' className='item'>
                Banana Pre-Order
              </a>
              <a href='#' className='item'>
                DNA FAQ
              </a>
              <a href='#' className='item'>
                How To Accesss
              </a>
              <a href='#' className='item'>
                Favorite X-Men
              </a>
            </div>
          </div>
          <div className='seven wide column'>
            <h4 className='ui header'>Caysti React Course</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
