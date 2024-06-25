// This page contains an alternative error page for database connections.
// If the database connection fails, the user will be redirected to this page.

// Imports

const DBError = () => {
  return (
    <div className="error-wrapper">
      <h1>Oops!</h1>
      <p>There was an error connecting to the database!</p>
      <p>Please contact your administrator to re-establish your connection.</p>
    </div>
  );
};

export default DBError;
