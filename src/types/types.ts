// This file contains the interfaces for the types used
// Imports
import { LoaderFunction } from "react-router-dom";

// Interface for the login form
export interface ILoginForm {
  email: string;
  password: string;
}

// Interface for the Pagination component
export interface PaginationProps {
  // Define the props that the Pagination component will receive
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}
