export const URL =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWZiY2NhOTllZjEwMDU3MTNhNjI1NGIzZmZiMmMwYSIsInN1YiI6IjY0MjZlYmFmYzA0NDI5MDFlODE2OWViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2EAJ8BR4MkjiFjZY6ik7rIT1vnoNVSBwTdVBn30r5Po',
  },
};

export const PICTURE_URL = 'https://image.tmdb.org/t/p/original';
