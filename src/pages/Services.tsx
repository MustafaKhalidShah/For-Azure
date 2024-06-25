// This file contains the code for the services page of the application.
// Imports
// Libraries
import { useState, useEffect } from "react";

// Components
import Actions from "../components/Actions";
import { ServHeaders } from "../components/ServRecords";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const Services = () => {
  // State variables
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  // Edit link
  const editLink = "/dashboard/services/edit";

  // Function to retrieve all services
  useEffect(() => {
    // Fetch the data from the database
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3001/db/services?page=${currentPage}`
      );
      const data = await response.json();
      setServices(data[0]);

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
        <Actions pageCall="services" />
        <Records headers={ServHeaders} records={services} link={editLink} />
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

export default Services;
