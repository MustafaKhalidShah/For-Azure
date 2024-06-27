// This file contains the code for the Top Level Database page of the application.
// Imports
// Libraries
import { useState, useEffect } from "react";

// Components
import Actions from "../components/Actions";
import { BOMHeaders } from "../components/BOMRecords";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const BOM = () => {
  // State variables
  const [BOMs, setBOMs] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  // Function to retrieve all BOMs
  useEffect(() => {
    // Fetch the data from the database
    const fetchData = async () => {
      const response = await fetch(
        `/api/boms?page=${currentPage}`
      );
      const data = await response.json();
      setBOMs(data[0]);

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
        <Actions pageCall="bom" />
        <Records headers={BOMHeaders} records={BOMs} />
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

export default BOM;
