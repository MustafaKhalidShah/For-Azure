// This file contains the code for the Part Type page
// Imports
// Libraries
import { useState, useEffect } from "react";

// Components
import Actions from "../components/Actions";
import { PartTypeHeaders } from "../components/PartTypeRecords";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const PartType = () => {
  // State variables
  const [partTypes, setPartTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  // Function to retrieve all part types
  useEffect(() => {
    // Fetch the data from the database
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3001/db/partTypes?page=${currentPage}`
      );
      const data = await response.json();
      setPartTypes(data[0]);

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
        <Actions pageCall="part-type" />
        <Records headers={PartTypeHeaders} records={partTypes} />
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

export default PartType;
