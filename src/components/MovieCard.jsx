import React from 'react';
import { getImageUrl } from '../services/tmdbApi';

/**
 * MovieCard Component
 * Displays a single movie card with poster, title, release date, and rating
 */
const MovieCard = ({ movie }) => {
  // Format release date to a readable format
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Format rating to 1 decimal place
  const formatRating = (rating) => {
    return rating ? rating.toFixed(1) : 'N/A';
  };

  return (
    <div className="movie-card">
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        className="movie-poster"
        loading="lazy"
      />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">
          Release: {formatDate(movie.release_date)}
        </p>
        <p className="movie-rating">
          Rating: ⭐ {formatRating(movie.vote_average)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

