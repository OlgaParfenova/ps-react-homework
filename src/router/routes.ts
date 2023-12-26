export const routes = {
  mainPageURL: '/',
  loginPageURL: '/login',
  favoritesPageURL: '/favorites',
  moviePageURL: (id: string | number) => `/movie/${id}`,
  notFoundPageURL: '/404',
} as const;
