// This file contains the code for the details of each single BOM.
// Imports
// Libraries
import { Outlet, useParams } from "react-router-dom";
import Swal from "sweetalert2";

// Components
import Actions from "../components/Actions";
import BOMParts from "../components/BOMParts";
import Pagination from "../components/Pagination";

const SingleBOM = () => {
  // Get the BOM ID from the URL
  const { id } = useParams<{ id: string }>();

  // Function to handle save request
  const handleSave = () => {
    Swal.fire({
      title: "Confirm save?",
      text: "Do you want to save your changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, save it!",
      cancelButtonText: "No, keep editing",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "Your changes have been saved.", "success").then(
          () => window.history.back()
        );
      }
    });
  };

  return (
    <div className="dashboard-wrapper">
      <div className="content-wrapper">
        <Actions />
        <h1>TL-BOM 000{id}</h1>
        <BOMParts />
        <div className="bottom-actions">
          <Pagination
            currentPage={1}
            totalPages={10}
            paginate={function (pageNumber: number): void {
              throw new Error("Function not implemented.");
            }}
          />
          {/* Back button */}
          <div className="bottom-btns">
            <button
              className="discard-btn"
              onClick={() => window.history.back()}
            >
              Discard
            </button>
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SingleBOM;
