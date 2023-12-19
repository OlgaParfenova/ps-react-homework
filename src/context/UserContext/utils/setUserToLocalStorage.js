export const setUserToLocalStorage = (user) => {
  if (user === null) localStorage.removeItem('user');
  localStorage.setItem('user', JSON.stringify(user));
};
