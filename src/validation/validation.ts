// Import validation library
import * as Yup from "yup";

// Validation schema for login form
export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});
