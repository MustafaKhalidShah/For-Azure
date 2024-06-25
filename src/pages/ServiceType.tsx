// This file contains the code for the Service Type page
// Imports
// Libraries

// Components
import Actions from "../components/Actions";
import {
  ServiceTypeHeaders,
  ServiceTypeRecords,
} from "../components/ServiceTypeRecords";
import Records from "../components/Records";
import Pagination from "../components/Pagination";

const ServiceType = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="content-wrapper">
        <Actions pageCall="service-type" />
        <Records headers={ServiceTypeHeaders} records={ServiceTypeRecords} />
        <div className="bottom-actions">
          <Pagination
            currentPage={1}
            totalPages={10}
            paginate={function (pageNumber: number): void {
              throw new Error("Function not implemented.");
            }}
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

export default ServiceType;
