// This file contains the code for the create and edit forms of the records

// Imports
import { useParams } from "react-router-dom";

// Component
import Form from "../components/Form";

const CreateEdit = () => {
  // State variable to get the id and page from the URL
  let { id, page } = useParams();
  let isIdPresent = false;
  // If id is not present, set id to 0
  if (id) {
    isIdPresent = true;
  }

  // Capitalize the first letter of a string
  const capitalizeFirstLetter = (str: string) => {
    const capitalizedFirstLetter = str.charAt(0).toUpperCase(); // Retrieve the first character of the input string and convert it to uppercase
    const remainingLetters = str.slice(1); // Extract the rest of the string starting from the second character
    return capitalizedFirstLetter + remainingLetters; // Concatenate the capitalized first letter with the remaining letters
  };

  return (
    <div className="dashboard-wrapper">
      <div className="content-wrapper">
        {isIdPresent ? (
          <h1>Edit {capitalizeFirstLetter(page ?? "")}</h1>
        ) : (
          <h1>Create {capitalizeFirstLetter(page ?? "")}</h1>
        )}
        <Form page={page} mode={isIdPresent ? "edit" : "create"} />
      </div>
    </div>
  );
};

export default CreateEdit;
