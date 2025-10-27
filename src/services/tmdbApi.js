// TMDB API Configuration
const API_KEY = '05ce34a3d96995a3457189f171a0e8a8'; // Replace with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

/**
 * Fetch popular movies from TMDB API
 * @param {number} page - The page number to fetch
 * @returns {Promise<Object>} - The API response containing movies data
 */
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

/**
 * Search for movies by query string
 * @param {string} query - The search query
 * @param {number} page - The page number to fetch
 * @returns {Promise<Object>} - The API response containing search results
 */
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}&language=en-US`
    );
    
    if (!response.ok) {
      throw new Error('Failed to search movies');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

/**
 * Get the full image URL for a movie poster
 * @param {string} posterPath - The poster path from TMDB API
 * @returns {string} - The full URL to the poster image
 */
export const getImageUrl = (posterPath) => {
  if (!posterPath) {
    return 'https://via.placeholder.com/500x750?text=No+Image';
  }
  return `${IMAGE_BASE_URL}${posterPath}`;
};

/**
 * Sort movies by different criteria
 * @param {Array} movies - Array of movie objects
 * @param {string} sortBy - Sort criteria (release_date_asc, release_date_desc, vote_average_asc, vote_average_desc)
 * @returns {Array} - Sorted array of movies
 */
export const sortMovies = (movies, sortBy) => {
  const moviesCopy = [...movies];
  
  switch (sortBy) {
    case 'release_date_asc':
      return moviesCopy.sort((a, b) => 
        new Date(a.release_date) - new Date(b.release_date)
      );
    
    case 'release_date_desc':
      return moviesCopy.sort((a, b) => 
        new Date(b.release_date) - new Date(a.release_date)
      );
    
    case 'vote_average_asc':
      return moviesCopy.sort((a, b) => a.vote_average - b.vote_average);
    
    case 'vote_average_desc':
      return moviesCopy.sort((a, b) => b.vote_average - a.vote_average);
    
    default:
      return moviesCopy;
  }
};

