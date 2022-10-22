/** @format */

// get speakers

import api from '../api';

export const fetchSpeakers = async () => {
  const response = await api.get('/speakers');
  return response.data;
};

// get speaker
