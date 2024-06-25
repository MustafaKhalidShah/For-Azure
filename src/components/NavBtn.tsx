// This file contains the code for the navigation button component

// Imports
import { Link } from "react-router-dom";

// Navigation button component
const NavBtn = () => {
  return (
    <div className="nav-wrapper">
      <section className="nav-instruments">
        <Link to="/dashboard/instruments" className="instruments-link">
          <button className="instruments-btn">Instruments</button>
        </Link>
        <Link to="/dashboard/bom" className="bom-link">
          <button className="bom-btn">Top Level Database</button>
        </Link>
        <Link to="/dashboard/build" className="build-link">
          <button className="build-btn">Create Build</button>
        </Link>
        <Link to="/dashboard/model" className="model-link">
          <button className="model-btn">Create Model</button>
        </Link>
        <Link to="/dashboard/parts" className="part-link">
          <button className="parts-btn">Parts Database</button>
        </Link>
        <Link to="/dashboard/part-type" className="part-type-link">
          <button className="part-type-btn">Create Part Type</button>
        </Link>
      </section>
      <section className="nav-services">
        <Link to="/dashboard/services" className="services-link">
          <button className="services-btn">Services</button>
        </Link>
        <Link to="/dashboard/case-type" className="case-type-link">
          <button className="case-type-btn">Create Case Type</button>
        </Link>
        <Link to="/dashboard/service-type" className="service-type-link">
          <button className="service-type-btn">Create Service Type</button>
        </Link>
        {/* <Link to="/dashboard/revisions" className="revisions-link">
          <button className="revisions-btn">History Revisions</button>
        </Link> */}
        {/* <button className="revisions-btn">History Revisions</button> */}
      </section>
      <section className="nav-reports">
        <button className="reports-btn">Reports</button>
        <Link to="/dashboard/reports" className="reports-link">
          <button className="view-reports-btn">View Reports</button>
        </Link>
      </section>
      <button className="account-mngmt-btn">Account Management</button>
    </div>
  );
};

export default NavBtn;
