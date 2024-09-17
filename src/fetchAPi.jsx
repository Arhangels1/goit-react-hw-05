import axios from "axios";
export {
  fetchTrendingMovies,
  fetchMovies,
  fetchMovieDetails,
  fetchReviews,
  fetchCast,
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTcxYjdiZDQwYzI0ZjQ2ZThjNDZiNjIzNzkyOWQxNiIsIm5iZiI6MTcyNjU3NTg1Ny4xMjI0NTEsInN1YiI6IjY2ZTk2ZjhlODJmZjg3M2Y3ZDFlYjI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ej0ObPFFA9hU8cGuARRJL4OsdfBLcH9FIUYxXhy5Y8E",
  },
};

const fetchTrendingMovies = async () => {
  const { data } = await axios(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  );
  return data.results;
};

const fetchMovies = async (userRequest) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?query=${userRequest}&language=en-US&page=1`,
    options
  );
  return data.results;
};

//'https://api.themoviedb.org/3/search/movie?query=gru&language=en-US&page=1'

const fetchMovieDetails = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

const fetchCast = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return data;
};

const fetchReviews = async (movieId) => {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};
