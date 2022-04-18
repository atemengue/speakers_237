/** @format */

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SpeakerDetail() {
  let params = useParams();
  const { idSpeaker } = params;
  const [speakerData, setSpeakerData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchSpeaker = async (idSpeaker) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/speakers/${idSpeaker}`
      );
      setSpeakerData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      // handleError
    }
  };

  useEffect(() => {
    fetchSpeaker(idSpeaker);
  }, [idSpeaker]);

  if (isLoading)
    return (
      <div className='ui segment'>
        <div className='ui active inverted dimmer'>
          <div className='ui text loader'>Loading</div>
        </div>
        <p></p>
      </div>
    );

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
                  <i className='large home icon'></i>
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
              {speakerData.sessions &&
                speakerData?.sessions.map((session, index) => {
                  return (
                    <div className='ui list'>
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
