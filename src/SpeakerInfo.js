/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL_SERVEUR } from './config';

const SpeakerInfo = () => {
  const { id } = useParams();

  const [speakerData, setSpeakerData] = useState({});

  const fetchData = (id) => {
    fetch(`${URL_SERVEUR}/speakers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSpeakerData(data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <div className='ui container'>
      <div className='ui vertical segment'>
        <div className='six wide column'>
          <img
            src={`./images/speaker-${speakerData.id}.jpg`}
            alt=''
            className='ui image'
          />
        </div>
      </div>
      <div className='ten wide column'>
        <h1 className='ui header'>
          <span className='sub'>
            {speakerData.first} - {speakerData.last}
          </span>
        </h1>
        <p className='ui text'>{speakerData.bio}</p>
      </div>
    </div>
  );
};

export default SpeakerInfo;
