// This file contains the code for the root page of the application
// Imports
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

// Components

const Root = () => {
  // State variable to store the status of the database connection
  const [dbStatus, setDbStatus] = useState<number>(200);

  useEffect(() => {
    // Check the connection to the database
    const validateConnection = async () => {
      fetch("http://localhost:3001/validate")
        .then((res) => {
          if (res.status === 200) {
            setDbStatus(200);
          } else {
            setDbStatus(500);
          }
        })
        .catch((err) => {
          console.error(err);
          setDbStatus(500);
        });
    };

    validateConnection();
  }, []);

  return (
    <div className="app-wrapper">
      {
        /* If the database connection is successful, proceed to the next step */
        dbStatus !== 200 ? (
          <div className="content-wrapper">
            <Outlet />
            <Navigate to="/dbError" />
          </div>
        ) : /* If the user is not logged in, redirect to the login page */
        localStorage.getItem("loggedIn") ? (
          <Navigate to="/dashboard" />
        ) : (
          <Navigate to="/login" />
        )
      }
    </div>
  );
};

export default Root;
