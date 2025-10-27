import React from 'react';
import MovieCard from './MovieCard';

/**
 * MovieGrid Component
 * Displays a grid of movie cards
 */
const MovieGrid = ({ movies, loading, error }) => {
  // Show loading spinner
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  // Show error message
  if (error) {
    return (
      <div className="error-message">
        <p>Error loading movies. Please try again.</p>
      </div>
    );
  }

  // Show no results message
  if (!movies || movies.length === 0) {
    return (
      <div className="movies-grid">
        <div className="no-results">
          <h3>No movies found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      </div>
    );
  }

  // Render movie grid
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;

