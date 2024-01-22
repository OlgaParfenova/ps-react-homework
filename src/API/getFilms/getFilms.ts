import axios from 'axios';
import { GetFilmsResponse, GetFilmsParams } from './types';
import { API_BASE, API_KEY } from '../constants';

export const getFilms = async (params: Partial<GetFilmsParams> = {}) => {
  const defaultParams = {
    include_adult: false,
    include_video: false,
    language: 'en-US',
    sort_by: 'popularity.desc',
    page: 1,
  };

  const response = await axios.get<GetFilmsResponse>(`${API_BASE}/discover/movie`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    },
    params: {
      ...defaultParams,
      ...params,
    },
  });

  return response;
};
