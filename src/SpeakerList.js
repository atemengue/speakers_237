/** @format */

import React, { useEffect, useState } from 'react';
import SpeakerUI from './SpeakerUI';

// importer les data

function SpeakerList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // zone d'execution
    setLoad(true);
    fetch('https://server-speakers.herokuapp.com/speakers')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoad(false);
      })
      .catch();
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
        <div className='container ui grid'>
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
