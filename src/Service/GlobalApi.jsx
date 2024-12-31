import axios from "axios";

const tmdbBaseURL = "https://api.themoviedb.org/3/";
const api_key = "9a9c87626895a6dc1ce74e7be4cb84e8";

const TrendingMovies = axios.get(
  `${tmdbBaseURL}trending/movie/day?api_key=${api_key}`
);

const TrendingSeries = axios.get(
  `${tmdbBaseURL}trending/tv/day?api_key=${api_key}`
);

const AllTrending = axios.get(
  `${tmdbBaseURL}trending/all/day?api_key=${api_key}`
);

const PopularMovies = axios.get(
  `${tmdbBaseURL}movie/popular?api_key=${api_key}`
);

const TopRatedMovies = axios.get(
  `${tmdbBaseURL}movie/top_rated?api_key=${api_key}`
);

const upComing = axios.get(`${tmdbBaseURL}movie/upcoming?api_key=${api_key}`);

const getVideos = (id, type) =>
  axios.get(`${tmdbBaseURL}${type}/${id}/videos?api_key=${api_key}`);

const getDetails = (id, type) =>
  axios.get(`${tmdbBaseURL}${type}/${id}?api_key=${api_key}`);

const TVSeries = (id) =>
  axios.get(`${tmdbBaseURL}discover/tv?api_key=${api_key}&with_genres=${id}`);

const Movies = (id) =>
  axios.get(
    `${tmdbBaseURL}discover/movie?api_key=${api_key}&with_genres=${id}`
  );

const Similar = (id, type) =>
  axios.get(`${tmdbBaseURL}${type}/${id}/similar?api_key=${api_key}`);

const Searching = (query, type) =>
  axios.get(`${tmdbBaseURL}search/${type}?api_key=${api_key}&query=${query}
`);

const topRated = axios.get(`${tmdbBaseURL}tv/top_rated?api_key=${api_key}`);

const PopularSeries = axios.get(`${tmdbBaseURL}tv/popular?api_key=${api_key}`);

const onTheAir = axios.get(`${tmdbBaseURL}tv/on_the_air?api_key=${api_key}`);

const airingToday = axios.get(
  `${tmdbBaseURL}tv/airing_today?api_key=${api_key}`
);

export default {
  TrendingMovies,
  PopularMovies,
  topRated,
  TopRatedMovies,
  upComing,
  getVideos,
  AllTrending,
  TrendingSeries,
  TVSeries,
  Movies,
  getDetails,
  Similar,
  PopularSeries,
  onTheAir,
  airingToday,
  Searching,
};
