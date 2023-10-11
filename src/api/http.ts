import axios, { AxiosResponse, AxiosError } from 'axios';
import { configure } from '../../env';

configure();

export const http = axios.create({
  baseURL: process.env.API_URL,

  headers: {
    get: {},
    post: {
      'Content-Type': 'application/json',
    },
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (e: AxiosError) => Promise.reject(e),
);
