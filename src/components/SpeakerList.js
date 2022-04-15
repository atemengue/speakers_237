/** @format */

import React from 'react';
import Speaker from './Speaker';

const SpeakerList = ({ speakers, setResults }) => {
  const heartFavoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    setResults(
      speakers.map((item) => {
        if (parseInt(item.id) === sessionId) {
          return { ...item, favorite: favoriteValue };
        }
        return item;
      })
    );
  };

  return (
    <div className='ui four colunn stackable grid'>
      {speakers.map((speaker, index) => {
        return (
          <div className='four wide column' key={index}>
            <Speaker
              heartFavoriteHandler={heartFavoriteHandler}
              {...speaker}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SpeakerList;
