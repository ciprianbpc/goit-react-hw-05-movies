import axios from 'axios';

const API_KEY = 'c05f97dedacb31a801ba181d4b98c4ea'; // Înlocuiește cu cheia ta API
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ro-RO',
  },
});

export const getTrendingMovies = async () => {
  const response = await tmdbApi.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await tmdbApi.get('/search/movie', {
    params: { query },
  });
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await tmdbApi.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await tmdbApi.get(`/movie/${id}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async (id) => {
  const response = await tmdbApi.get(`/movie/${id}/reviews`);
  return response.data.results;
};
