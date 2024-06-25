// This file contains the code for the instruments page of the application.
// Imports
// Libraries
import { useEffect, useState } from "react";

// Components
import Actions from "../components/Actions";
import { InstHeaders } from "../components/InstRecords";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const Instruments = () => {
  // State variables
  const [instruments, setInstruments] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  // Edit link
  const editLink = "/dashboard/instruments/edit";

  // Function to retrieve all instruments
  useEffect(() => {
    // Fetch the data from the database
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3001/db/instruments?page=${currentPage}`
      );
      const data = await response.json();
      setInstruments(data[0]);

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
        <Actions pageCall="instruments" />
        <Records headers={InstHeaders} records={instruments} link={editLink} />
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

export default Instruments;
