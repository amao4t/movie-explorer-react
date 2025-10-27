import React from 'react';

/**
 * Pagination Component
 * Displays pagination controls with Previous and Next buttons
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Handle previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Handle next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <footer className="pagination-container">
      <button
        className="pagination-btn"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="current-page">Page {currentPage} of {totalPages}</span>
      <button
        className="pagination-btn"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </footer>
  );
};

export default Pagination;

