/** @format */

import React from 'react';

import { Link } from 'react-router-dom';

import ImageSpeaker from './ImageSpeaker';
import Session from './Session';

function SpeakerUI({ id, first, last, bio, company, sessions, twitterHandle }) {
  return (
    <Link to={`/speakers/${id}`} className='ui card'>
      <ImageSpeaker id={id} />
      <div className='content'>
        <span className='header'>
          {first} + {last}{' '}
        </span>
        <div className='description'>{bio}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'>{twitterHandle}</i>
          </span>
        </div>
        <div className='ui divider'></div>
        <span>
          <i className='home icon'></i>
          {company}
        </span>
      </div>
      <div className='extra content'>
        <Session sessions={sessions} />
      </div>
    </Link>
  );
}

export default SpeakerUI;
