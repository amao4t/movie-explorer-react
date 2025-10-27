import React from 'react';

/**
 * Header Component
 * Displays the app title, search bar, and sort dropdown
 */
const Header = ({ searchQuery, onSearchChange, sortBy, onSortChange }) => {
  return (
    <header className="header">
      <h1>Movie Explorer</h1>
      <div className="controls">
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for a movie..."
            className="search-input"
          />
        </div>
        
        {/* Sort Dropdown */}
        <div className="sort-container">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="popularity">Sort By</option>
            <option value="release_date_asc">Release Date (Asc)</option>
            <option value="release_date_desc">Release Date (Desc)</option>
            <option value="vote_average_asc">Rating (Asc)</option>
            <option value="vote_average_desc">Rating (Desc)</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

