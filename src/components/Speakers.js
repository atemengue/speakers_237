/** @format */

import React, { useEffect, useState, useMemo, useContext } from 'react';
import SpeakerList from './SpeakerList';

import axios from 'axios';
import UserPlaceHolder from './UserPlaceHolder';
import { SpeakerContext } from '../App';

const Speakers = ({ data }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [speakingSunday, setspeakingSunday] = useState(true);
  const [speakingSaturday, setspeakingSaturday] = useState(true);
  const [isError, setIsError] = useState(false);

  // utilisation du context
  const { showCheckbox } = useContext(SpeakerContext);

  useEffect(() => {
    setIsLoading(true);
    fetchSpeakerData();
  }, []);

  // const fetchSpeakerData = () => {
  //   axios
  //     .get('http://localhost:3001/speakers')
  //     .then((response) => {
  //       setResults(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       setIsError(true);
  //     });
  // };

  const fetchSpeakerData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/speakers');
      setResults(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true); // On peut faire une gestion globale des erreurs .
    }
  };

  const handleChangeSaturday = () => {
    setspeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setspeakingSunday(!speakingSunday);
  };

  const newSpeakList = useMemo(
    () =>
      results
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort(function (a, b) {
          if (a.first < b.last) {
            return -1;
          }
          if (a.first > b.last) {
            return 1;
          }
          return 0;
        }),
    [results, speakingSaturday, speakingSunday]
  );

  const speakerListFiltered = isLoading ? [] : newSpeakList;

  if (isLoading) return <UserPlaceHolder />;

  if (isError)
    return (
      <div style={{ color: 'red' }} className='ui text'>
        Nous avons rencontré une erreur
      </div>
    );

  return (
    <div>
      {showCheckbox && (
        <div className='ui form'>
          <div className='inline fields'>
            <label>Samedi et Dimanche?</label>
            <div className='field'>
              <div className='ui checkbox'>
                <input
                  type='checkbox'
                  name='samedi'
                  onChange={handleChangeSaturday}
                  checked={speakingSaturday}
                />
                <label>Samedi</label>
              </div>
            </div>
            <div className='field'>
              <div className='ui checkbox'>
                <input
                  onChange={handleChangeSunday}
                  type='checkbox'
                  name='dimanche'
                  checked={speakingSunday}
                />
                <label>Dimanche</label>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='ui divider' />
      <SpeakerList speakers={speakerListFiltered} setResults={setResults} />
    </div>
  );
};

export default Speakers;
