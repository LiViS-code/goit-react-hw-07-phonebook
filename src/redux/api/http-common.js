import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://620690d292dd6600171c0b7b.mockapi.io/api/v1/',
  headers: {
    'Content-type': 'application/json',
  },
});
