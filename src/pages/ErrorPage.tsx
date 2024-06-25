// This file contains the code for the error page of the application
// Imports
// Libraries
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

// Components

const ErrorPage = () => {
  // Get the error message
  const error = useRouteError() as any;

  // Check if the error is a response error
  if (!isRouteErrorResponse(error)) {
    return (
      <div className="content-wrapper">
        <div className="error-wrapper">
          <h1>Oops!</h1>
          <p>
            You're probably at the wrong place or something unexpected has
            occurred!
          </p>
          <Link to="/login">
            <button className="return-btn">Return Home</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="content-wrapper">
        <div className="error-wrapper">
          <h1>Oops!</h1>
          <p>
            <i>{error.status + " - " + error.statusText}</i>
          </p>
          {error.data?.message && <p>{error.data.message}</p>}
          {localStorage.getItem("loggedIn") ? (
            <Link to="/dashboard">
              <button className="return-btn">Return to Dashboard</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="return-btn">Return Home</button>
            </Link>
          )}
        </div>
      </div>
    );
  }
};

export default ErrorPage;
