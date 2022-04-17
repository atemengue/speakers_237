/** @format */

import React from 'react';

export default function SpeakerDetail() {
  return (
    <div className='ui vertical segment'>
      <div className='ui stackable grid'>
        <div className='six wide column'>
          <img
            src='/images/dummy-speaker-image.jpg'
            alt='detail profil'
            className='ui image'
          />
        </div>
        {/* ADD SEGMENT */}
        <div className='ten wide column'>
          <h1 className='ui header'>
            <span className='sub'>Nom du speaker</span>
          </h1>
          <p className='ui text'>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
            vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
            amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
            placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
            pharetra.
          </p>
          <p>
            <div class='ui list'>
              <div class='item'>
                <i class='calendar icon'></i>
                <div class='content'>
                  <a class='header'>Rails powered by GlassFish</a>
                  <div class='description'>
                    An excellent polish restaurant, quick delivery and hearty,
                    filling meals.
                  </div>
                </div>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
