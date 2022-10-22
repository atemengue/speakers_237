/** @format */

import React, { useEffect, useState } from 'react';
import api from './api';
import { URL_SERVEUR } from './config';
import SpeakerUI from './SpeakerUI';
import axios from 'axios';

function SpeakerList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
       const response = await api.get('/speakers');

    
      setData(response.data);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {load ? (
        <div class='ui segment'>
          <p></p>
          <div class='ui active dimmer'>
            <div class='ui loader'></div>
          </div>
        </div>
      ) : (
        <div className='ui grid'>
          {data.map(function (speaker, index) {
            return (
              <div key={index} className='four wide column'>
                <SpeakerUI {...speaker} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SpeakerList;
