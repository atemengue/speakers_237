/** @format */

import React, { useEffect, useState } from 'react';
import SpeakerList from './SpeakerList';

import axios from 'axios';
import UserPlaceHolder from './UserPlaceHolder';

const Speakers = ({ data }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchSpeakerData();
  }, []);

  const fetchSpeakerData = () => {
    axios
      .get('http://localhost:3001/speakers')
      .then((response) => {
        console.log(response);
        setResults(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // setIsLoading(false);
      });
  };

  if (isLoading) return <UserPlaceHolder />;

  return <SpeakerList speakers={results} />;
};

export default Speakers;
