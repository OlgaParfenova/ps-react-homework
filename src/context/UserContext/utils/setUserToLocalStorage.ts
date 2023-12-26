import { User } from '../user.context.props';

export const setUserToLocalStorage = (user: User | null): void => {
  if (user === null) localStorage.removeItem('user');
  localStorage.setItem('user', JSON.stringify(user));
};
