// Imports
// Libraries
import Swal from "sweetalert2";
import { Formik, Field, Form, ErrorMessage } from "formik";

// Types
import { ILoginForm } from "../types/types";

// Validation
import { loginValidationSchema } from "../validation/validation";

// Loader function to set log in status
export async function Loader() {
  // Store log in status in local storage
  localStorage.setItem("loggedIn", "false");

  // Return data
  return {};
}

const Login = () => {
  // Initial form values
  const initialValues: ILoginForm = {
    email: "",
    password: "",
  };

  // Function to submit form
  const handleSubmit = (values: ILoginForm) => {
    // Hard-coded test values
    const testValues = {
      email: "test@email.com",
      password: "TestPassw0rd!",
    };

    // Function to wait for a given time
    // const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

    // Check if form values match test values
    if (
      values.email === testValues.email &&
      values.password === testValues.password
    ) {
      // Create a sweet alert for successful login
      Swal.fire({
        icon: "success",
        title: "Login successful!",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => {
        // Set log in status in local storage
        localStorage.setItem("loggedIn", "true");
        // Redirect to dashboard
        window.location.href = "/dashboard";
      });
    } else {
      // Create a sweet alert for failed login
      Swal.fire({
        icon: "error",
        title: "Login failed!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="login-form">
            <h2 className="login-header">Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button className="submit-btn" type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
