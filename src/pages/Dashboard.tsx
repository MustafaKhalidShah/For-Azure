// This file contains the code for the home of the dashboard app.
// Imports
// Libraries
import { Outlet, Navigate } from "react-router-dom";

// Components
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Header />
      <div className="dashboard-content">
        <Outlet />
        {
          // Check if user is logged in
          // If not, redirect to login page
          localStorage.getItem("loggedIn") === "false" ? (
            <Navigate to="/login" />
          ) : (
            <Navigate to="/dashboard/navigation" />
          )
        }
      </div>
    </div>
  );
};

export default Dashboard;
