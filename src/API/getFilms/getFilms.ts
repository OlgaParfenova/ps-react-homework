import axios from 'axios';
import { GetFilmsResponse } from './types';
import { API_BASE, API_KEY } from '../constants';

export const getFilms = async (params: URLSearchParams) => {
  const paramsObject = Object.fromEntries(params);

  const defaultParams = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    sort_by: 'popularity.desc',
    page: 1,
    filter: 'Rewind',
  };

  const response = await axios.get<GetFilmsResponse>(`${API_BASE}/discover/movie`, {
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
