/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from './api';
import { URL_SERVEUR } from './config';
import Sessions from './Sessions';

const SpeakerInfo = () => {
  const { id } = useParams();
  const [speakerData, setSpeakerData] = useState({});

  const fetchData = (id) => {
    api.get(`/speakers/${id}`).then((response) => {
      setSpeakerData(response.data);
    });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div className='ui container'>
      <div className='ui vertical segment'>
        <div className='ui stackable grid'>
          <div className='six wide column'>
            <img
              src={`/images/speaker-${speakerData?.id}.jpg`}
              alt='de profil du speaker'
              className='ui image'
            />
          </div>
          <div className='ten wide column'>
            <h1 className='ui header'>
              <span className='sub'>
                {speakerData?.last}-{speakerData.first}
              </span>
            </h1>
            <p className='ui text'>{speakerData?.bio}</p>
            <p>
              <div className='ui list'>
                <div className='item'>
                  <i className='large map icon'></i>
                  <div className='content'>
                    <span className='header'>{speakerData?.company}</span>
                  </div>
                </div>
                <div className='item'>
                  <i class='twitter large icon'></i>
                  <div className='content'>
                    <span className='header'>
                      @{speakerData?.twitterHandle}
                    </span>
                  </div>
                </div>
              </div>
              <div className='ui divider' />
              <h2 class='ui header'>Sessions</h2>
              <Sessions sessions={speakerData.sessions} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerInfo;
