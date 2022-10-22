/** @format */

import React from 'react';

const Session = ({ sessions }) => {
  if (sessions) {
    return sessions.map(({ id, eventYear }) => {
      return (
        <div key={id}>
          <span>
            <i className='bullhorn icon'>{eventYear}</i>
          </span>
        </div>
      );
    });
  }
};

export default Session;
