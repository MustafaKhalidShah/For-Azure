// This file contains the code for the header of the application.
// Imports
// Libraries
import Swal from "sweetalert2";

// Images
import BSDLogo from "../assets/img/bsd-logo-1.png";

const Header = () => {
  // Function to handle logout
  const handleLogout = () => {
    if (localStorage.getItem("loggedIn") === "true") {
      // Show alert
      Swal.fire({
        title: "Are you sure you want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          // Set the user as logged out
          localStorage.setItem("loggedIn", "false");
          // Redirect to login page
          window.location.href = "/";
        }
      });
    }
  };

  return (
    <header className="dashboard-header">
      <img src={BSDLogo} alt="BSD Logo" className="bsd-logo" />
      <section className="account-name">
        <p>John Doe</p>
      </section>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
