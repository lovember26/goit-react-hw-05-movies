import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5c8223fe177d644ec0560696e1a12ddd';

export const getMovies = async () => {
  const result = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return result.data.results;
};

export const getMovie = async movieId => {
  const result = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return result.data;
};

export const getCast = async movieId => {
  const result = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return result.data.cast;
};

export const getReviews = async movieId => {
  const result = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return result.data.results;
};
export const searchMovie = async query => {
  const result = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );

  return result.data.results;
};
