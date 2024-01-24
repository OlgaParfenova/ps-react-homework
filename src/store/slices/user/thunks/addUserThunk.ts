import { AppDispatch, RootState } from '../../../store';
import { addUser, UserState } from '../user.slice';

export const addUserThunk = function (name: string) {
  return function (dispatch: AppDispatch, getState: () => RootState) {
    dispatch(addUser(name));
    const user: UserState['user'] = {
      name,
    };
    localStorage.setItem('user', JSON.stringify(user));
  };
};
