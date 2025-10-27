import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Pagination from './components/Pagination';
import { fetchPopularMovies, searchMovies, sortMovies } from './services/tmdbApi';

/**
 * Main App Component
 * Manages state and orchestrates all child components
 */
function App() {
  // State management
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  /**
   * Fetch movies from TMDB API
   * Triggered when currentPage or searchQuery changes
   */
  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;
        
        // Search or fetch popular movies
        if (searchQuery.trim()) {
          data = await searchMovies(searchQuery, currentPage);
        } else {
          data = await fetchPopularMovies(currentPage);
        }

        setMovies(data.results || []);
        setDisplayedMovies(data.results || []);
        setTotalPages(data.total_pages || 1);
      } catch (err) {
        setError(err.message);
        setMovies([]);
        setDisplayedMovies([]);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [currentPage, searchQuery]);

  /**
   * Apply sorting when sortBy changes or movies update
   */
  useEffect(() => {
    if (sortBy !== 'popularity' && movies.length > 0) {
      const sorted = sortMovies(movies, sortBy);
      setDisplayedMovies(sorted);
    } else {
      setDisplayedMovies(movies);
    }
  }, [sortBy, movies]);

  /**
   * Handle search query change
   * Reset to page 1 when search query changes
   */
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  /**
   * Handle sort change
   */
  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  /**
   * Handle page change
   * Scroll to top when page changes
   */
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* Header with search and sort controls */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />

      {/* Main content with movies grid */}
      <main className="main-content">
        <MovieGrid
          movies={displayedMovies}
          loading={loading}
          error={error}
        />
      </main>

      {/* Pagination controls */}
      {!loading && !error && displayedMovies.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;

