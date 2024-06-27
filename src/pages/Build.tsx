// This file contains the code for the Build page
// Imports
// Libraries
import { useState, useEffect } from "react";

// Components
import Actions from "../components/Actions";
import { BuildHeaders } from "../components/BuildRecords";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const Build = () => {
  // State variables
  const [builds, setBuilds] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  // Function to retrieve all builds
  useEffect(() => {
    // Fetch the data from the database
    const fetchData = async () => {
      const response = await fetch(
        `/api/builds?page=${currentPage}`
      );
      const data = await response.json();
      setBuilds(data[0]);

      // Calculate the total pages for pagination
      let totalPages = Math.ceil(data[1][0][""] / 10);
      setMaxPage(totalPages);
    };

    // Call the function
    fetchData();
  }, [currentPage]);

  return (
    <div className="dashboard-wrapper">
      <div className="content-wrapper">
        <Actions pageCall="build" />
        <Records headers={BuildHeaders} records={builds} />
        <div className="bottom-actions">
          <Pagination
            currentPage={currentPage}
            totalPages={maxPage}
            paginate={(pageNumber: number) => setCurrentPage(pageNumber)}
          />
          {/* Back button */}
          <button className="back-btn" onClick={() => window.history.back()}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Build;
