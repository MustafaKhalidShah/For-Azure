// This file contains the code for the action buttons of the record tables.
// Imports
import { Link } from "react-router-dom";

// Interface
interface ActionsProps {
  pageCall?: string;
}

const Actions = ({ pageCall }: ActionsProps) => {
  // Create the link for the create/edit page
  const createAddLink = `/dashboard/${pageCall}/create`;

  return (
    <div className="actions-wrapper">
      <div className="search-wrapper">
        <input className="search-input" placeholder="Search" />
        <button className="search-button">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
      <div className="action-btns">
        {
          // If the pageCall is not defined, then the Add button will not be displayed
          pageCall ? (
            <Link to={createAddLink}>
              <button className="add-btn">
                <span className="material-symbols-outlined">add_circle</span>
                Add
              </button>
            </Link>
          ) : (
            // If the pageCall is defined, then the Add button will be displayed
            <button className="add-btn">
              <span className="material-symbols-outlined">add_circle</span>
              Add
            </button>
          )
        }
        <button className="delete-btn">
          <span className="material-symbols-outlined">delete</span>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Actions;
