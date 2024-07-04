// Imports
// Libraries
import { createBrowserRouter, Navigate } from "react-router-dom";

// Styles
import "./styles/main.css";

// Components
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import DBError from "./pages/DBError";
import Dashboard from "./pages/Dashboard";
import Navigation from "./pages/Navigation";
import Instruments from "./pages/Instruments";
import Services from "./pages/Services";
import BOM from "./pages/BOM";
import SingleBOM from "./pages/SingleBOM";
import Build from "./pages/Build";
import Model from "./pages/Model";
import Parts from "./pages/Parts";
// import Revisions from "./pages/Revisions";
import CaseType from "./pages/CaseType";
import ServiceType from "./pages/ServiceType";
import PartType from "./pages/PartType";
import CreateEdit from "./pages/CreateEdit";
import Reports from "./pages/Reports";

// Function to create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
    errorElement: <ErrorPage />,
    children: [{ path: "dbError", element: <DBError /> }],
  },
  {
    path: "login",
    element: "bla bla unused",
    errorElement: <ErrorPage />, // we will not use this login route
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      { path: "navigation", element: <Navigation /> },
      { path: "instruments", element: <Instruments /> },
      { path: "services", element: <Services /> },
      { path: "bom", element: <BOM /> },
      { path: "bom/create-edit/:id", element: <SingleBOM /> },
      { path: "build", element: <Build /> },
      { path: "model", element: <Model /> },
      { path: "parts", element: <Parts /> },
      // { path: "revisions", element: <Revisions /> },
      { path: "case-type", element: <CaseType /> },
      { path: "service-type", element: <ServiceType /> },
      { path: "part-type", element: <PartType /> },
      {
        path: ":page/create",
        element: <CreateEdit />,
      },
      {
        path: ":page/edit/:id?",
        element: <CreateEdit />,
      },
      { path: "reports", element: <Reports /> },
    ],
  },
]);

export default router;
