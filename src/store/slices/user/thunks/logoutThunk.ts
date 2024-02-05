import { AppDispatch, RootState } from '../../../store';
import { clearFavorites } from '../../favorites';
import { logout } from '../user.slice';

export const logoutThunk = function () {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(logout());
    dispatch(clearFavorites());
    localStorage.clear();
  };
};
