import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type FavoritesItem = {
  id: number;
  title: string;
  rating: number;
  poster: string;
};

export type FavoritesState = {
  items: FavoritesItem[];
};

const localStorageData = localStorage.getItem('favoritesList');

const initialState: FavoritesState = {
  items: localStorageData ? (JSON.parse(localStorageData) as FavoritesItem[]) : [],
};

export const favoritesSlice = createSlice({
  reducerPath: 'favoritesSlice',
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (prevState, action: PayloadAction<FavoritesItem>) => {
      const isExist = prevState.items.find(({ id }) => action.payload.id === id);
      if (!isExist) prevState.items.push(action.payload);
    },
    removeFavorite: (prevState, action: PayloadAction<number>) => {
      const index = prevState.items.findIndex(({ id }) => action.payload === id);
      if (index !== -1) {
        const newItems = [...prevState.items.slice(0, index), ...prevState.items.slice(index + 1)];
        prevState.items = newItems;
      }
    },
    clearFavorites: (prevState) => {
      prevState.items = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
