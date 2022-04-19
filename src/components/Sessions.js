/** @format */

import React from 'react';

export default function Sessions({ sessions }) {
  return (
    <div>
      {sessions &&
        sessions.map((session, index) => {
          return (
            <div key={index} className='ui list'>
              <div className='item'>
                <i className='map marker icon'></i>
                <div className='content'>
                  <span className='header'>{session?.title}</span>
                  <div className='ui list'>
                    <div className='item'>
                      <i class='calendar icon'></i>
                      <div class='content'>{session?.eventYear}</div>
                    </div>
                    <div className='item'>
                      <i class='location arrow icon'></i>
                      <div class='content'>{session?.room?.name}</div>
                    </div>
                    <div className='item'>
                      <i class='users icon'></i>
                      <div class='content'>
                        {session?.room?.capacity} places max
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
