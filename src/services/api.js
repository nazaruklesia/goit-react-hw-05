import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_API_KEY;
const apiToken = import.meta.env.VITE_API_TOKEN;




export async function fetchTrendingMovies() {
  const options = {
    method: 'GET',
    url: `${baseURL}/trending/movie/day`,
    params: {
      api_key: API_KEY,
      page: 1
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}


export async function fetchDetailsMovies(movieId) {
  const options = {
    method: 'GET',
    url: `${baseURL}/movie/${movieId}`,
    params: {
      api_key: API_KEY,
      page: 1,
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
}


export async function fetchCreditsMovies(movieId) {
  const options = {
    method: 'GET',
    url: `${baseURL}/movie/${movieId}/credits`,
    params: {
      api_key: API_KEY,
      page: 1,
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
}


export async function fetchReviewsMovies(movieId) {
  const options = {
    method: 'GET',
    url: `${baseURL}/movie/${movieId}/reviews`,
    params: {
      api_key: API_KEY,
      page: 1,
      // release_dates,
      // vote_average
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
}


export async function fetchKeywordMovies(query) {
  const options = {
    method: 'GET',
    url: `${baseURL}/search/movie`,
    params: {
      api_key: API_KEY,
      query: query,
      page: 1,
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies by keyword:', error);
    throw error;
  }
}
