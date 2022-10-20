/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL_SERVEUR } from './config';
import SpeakerUI from './SpeakerUI';

function SpeakerList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL_SERVEUR}/speakers`);
      setData(response.data);
    } catch (error) {
      setIsError(true);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`${URL_SERVEUR}/speakers`);
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     setIsError(true);
  //   }
  // };

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
