import axios from 'axios';
import { API_BASE, API_KEY } from '../constants';

export const searchFilms = async (params: URLSearchParams) => {
  const paramsObject = Object.fromEntries(params);

  const defaultParams = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    sort_by: 'popularity.desc',
    page: 1,
    query: '',
    api_key: API_KEY,
  };

  const response = await axios.get(`${API_BASE}/search/movie`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
    params: {
      ...defaultParams,
      ...paramsObject,
    },
  });
  return response;
};
