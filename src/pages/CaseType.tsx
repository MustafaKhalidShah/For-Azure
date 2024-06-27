// This file contains the code for the Case Type page
// Imports
// Libraries
import { useEffect, useState } from "react";

// Components
import Actions from "../components/Actions";
import { CaseTypeHeaders } from "../components/CaseTypeRecords";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const CaseType = () => {
  // State variables
  const [caseTypes, setCaseTypes] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  // Function to retrieve all builds
  useEffect(() => {
    // Fetch the data from the database
    const fetchData = async () => {
      const response = await fetch(
        `/api/caseTypes?page=${currentPage}`
      );
      const data = await response.json();
      setCaseTypes(data[0]);

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
        <Actions pageCall="case-type" />
        <Records headers={CaseTypeHeaders} records={caseTypes} />
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

export default CaseType;
