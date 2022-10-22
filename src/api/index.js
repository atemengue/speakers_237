/** @format */

import axios from 'axios';
import { URL_SERVEUR } from '../config';

const api = axios.create({
  baseURL: URL_SERVEUR,
});

export default api;
// const instance = axios.create({
//   baseURL: "http://localhost:3001/api",
//   headers: { "Content-Type": "application/json" },
// });
