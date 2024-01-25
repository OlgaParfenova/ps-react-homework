import { AppDispatch, RootState } from '../../../store';
import { FavoritesItem, addFavorite } from '../favorites.slice';

export const addFavoriteThunk = function ({ id, title, rating, poster }: FavoritesItem) {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(addFavorite({ id, title, rating, poster }));
    const favoritesList: FavoritesItem[] = getState().favoritesSlice.items;
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  };
};
