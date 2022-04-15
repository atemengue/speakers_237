/** @format */

import React, { useRef } from 'react';
import ImageSpeaker from './ImageSpeaker';

const Speaker = ({
  first,
  last,
  company,
  bio,
  id,
  twitterHandle,
  sessions,
}) => {
  const primaryImage = `images/speaker-${id}.jpg`;
  const secondaryImage = `images/bw/speaker-${id}.jpg`;

  return (
    <di className='ui card'>
      <div className='image'>
        <ImageSpeaker
          primaryImage={primaryImage}
          secondaryImage={secondaryImage}
        />
      </div>
      <div className='content'>
        <a href='#' className='header'>
          {first} - {last}
        </a>

        <div className='description'>{bio}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'></i>@{twitterHandle}
          </span>
        </div>

        <div className='ui divider'></div>
        <span>
          <i className='home icon'></i>
          {company}
        </span>
      </div>
      <div className='extra content'>
        <a href='#'>
          <i className='bullhorn icon'></i>
          {sessions.length}
        </a>
      </div>
    </di>
  );
};

export default Speaker;
