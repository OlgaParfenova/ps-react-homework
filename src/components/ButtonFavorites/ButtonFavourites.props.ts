import { ButtonHTMLAttributes } from 'react';

type ButtonFavourites = {
  id: number;
  title: string;
  rating: number;
  poster: string;
};

export type ButtonFavouritesProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id'> &
  ButtonFavourites;
