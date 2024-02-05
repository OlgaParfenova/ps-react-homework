import { Genre } from '../../types';

export type FilmDescriptionProps = {
  description: string;
  rating: number;
  poster: string;
  release: string;
  runtime: number | string;
  id: number;
  genres: Genre[];
  title: string;
};
