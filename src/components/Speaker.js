/** @format */

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageSpeaker from './ImageSpeaker';

const Speaker = React.memo(
  ({
    first,
    last,
    company,
    bio,
    id,
    twitterHandle,
    sessions,
    favorite,
    heartFavoriteHandler,
  }) => {
    const primaryImage = `images/speaker-${id}.jpg`;
    const secondaryImage = `images/bw/speaker-${id}.jpg`;

    return (
      <Link to={`/speakers/${id}`}>
        <div className='ui card'>
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
            <div className='content'>
              <span className='right floated'>
                {favorite ? (
                  <i
                    data-sessionid={id}
                    onClick={(e) => heartFavoriteHandler(e, !favorite)}
                    className='red heart like icon'
                  ></i>
                ) : (
                  <i
                    data-sessionid={id}
                    onClick={(e) => heartFavoriteHandler(e, !favorite)}
                    className='heart like icon'
                  ></i>
                )}
              </span>
              <i className='comment icon'></i>
              {sessions.length} sessions
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

export default Speaker;
