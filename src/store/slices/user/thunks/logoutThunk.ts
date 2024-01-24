import { AppDispatch, RootState } from '../../../store';
import { logout } from '../user.slice';

export const logoutThunk = function () {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(logout());
    localStorage.clear();
  };
};
