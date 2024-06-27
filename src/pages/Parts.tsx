// This file contains the code for the Parts page.
// Imports
import { useEffect, useState } from "react";

// Components
import Actions from "../components/Actions";
import { PartHeaders } from "../components/PartRecords";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const Parts = () => {
  // State variables
  const [parts, setParts] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  // Function to retrieve all parts
  useEffect(() => {
    // Fetch the data from the database
    const fetchData = async () => {
      const response = await fetch(
        `/api/parts?page=${currentPage}`
      );
      const data = await response.json();
      setParts(data[0]);

      // Calculate the total pages for pagination
      let totalPages = Math.ceil(data[1][0][""] / 5);
      setMaxPage(totalPages);
    };

    // Call the function
    fetchData();
  }, [currentPage]);

  return (
    <div className="dashboard-wrapper">
      <div className="content-wrapper">
        <Actions pageCall="parts" />
        <Records headers={PartHeaders} records={parts} />
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

export default Parts;
