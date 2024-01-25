import { AppDispatch, RootState } from '../../../store';
import { FavoritesItem, removeFavorite } from '../favorites.slice';

export const removeFavoriteThunk = function (id: FavoritesItem['id']) {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(removeFavorite(id));
    const favoritesList: FavoritesItem[] = getState().favoritesSlice.items;
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  };
};
