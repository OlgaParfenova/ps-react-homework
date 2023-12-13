import { User } from '../user.context.props';

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user');
  return user !== null ? (JSON.parse(user) as User) : null;
};
