import { HTMLAttributes } from 'react';

type FilmRating = {
  rating: number;
};

export type FilmRatingProps = HTMLAttributes<HTMLDivElement> & FilmRating;
