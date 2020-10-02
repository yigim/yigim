import axios from 'axios';
import { BACKEND_URL } from '../constants/constants';
export const httpClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    error.message = error.response.data.message;
    error.dat = error.response.message;
    return Promise.reject(error);
  },
);
