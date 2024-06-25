// This file contains the code for the Pagination component
// Imports
// Libraries
import React from "react";

// Interfaces
import { PaginationProps } from "../types/types";

// Create pagination component
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  paginate,
}) => {
  // Create an array of page numbers
  const pageNumbers = [];

  // Loop through the total number of pages and add them to the array
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      {currentPage !== 1 && (
        <div className="start-prev-btns">
          <button
            className="start-btn"
            onClick={() => paginate((currentPage = 1))}
            disabled={currentPage === 1}
          >
            <span className="material-symbols-outlined">first_page</span>
          </button>
          <button
            className="prev-btn"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
        </div>
      )}

      {
        // If the current page is less than 3, display the first page
        currentPage < 3 && (
          <button
            className={
              currentPage === 1 ? "first-page-focused" : "first-page-unfocused"
            }
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
          >
            1
          </button>
        )
      }

      {
        // If the current page is greater than 3, display the ellipsis
        currentPage > 3 && <span className="ellipsis">...</span>
      }

      {
        // If the current page is greater than 2, display the previous page
        currentPage > 2 && (
          <button
            className="minus-one"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {currentPage === totalPages ? currentPage - 2 : currentPage - 1}
          </button>
        )
      }

      {
        // If the total number of pages is greater than 3, display the current page
        currentPage === totalPages && totalPages > 3 && (
          <button
            className="minus-two"
            onClick={() => paginate(currentPage - 2)}
            disabled={currentPage === 1}
          >
            {currentPage === totalPages ? currentPage - 1 : currentPage - 2}
          </button>
        )
      }

      {
        // If the total number of pages is greater than 2, display the current page
        currentPage > 1 && (
          <button
            className="current"
            onClick={() => paginate(currentPage)}
            disabled={currentPage === 1}
          >
            {currentPage}
          </button>
        )
      }

      {
        // If the total number of pages is greater than 1, display the current page
        currentPage < totalPages && (
          <button
            className="plus-one"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {currentPage + 1}
          </button>
        )
      }

      {
        // If the total number of pages is greater than 2, display the current page
        currentPage === 1 && totalPages > 2 && (
          <button
            className="plus-two"
            onClick={() => paginate(currentPage + 2)}
            disabled={currentPage === totalPages}
          >
            {currentPage + 2}
          </button>
        )
      }

      {
        // If the total number of pages is greater than 3, display the ellipsis
        currentPage < totalPages - 2 && <span className="ellipsis">...</span>
      }

      {
        // If reaches the last 3 pages, hide the next button
        currentPage < totalPages && (
          <button
            className="next-btn"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        )
      }

      {
        // If reaches the last 3 pages, hide the end button
        currentPage < totalPages - 1 && (
          <button
            className="end-btn"
            onClick={() => paginate((currentPage = totalPages))}
            disabled={currentPage === totalPages}
          >
            <span className="material-symbols-outlined">last_page</span>
          </button>
        )
      }
    </div>
  );
};

export default Pagination;
