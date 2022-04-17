/** @format */

import React from 'react';

export default function Footer() {
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
                How To Access
              </a>
              <a href='#' className='item'>
                Favorite X-Men
              </a>
            </div>
          </div>
          <div className='seven wide column'>
            <h4 className='ui header'>Helios React JS WorKShop</h4>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
