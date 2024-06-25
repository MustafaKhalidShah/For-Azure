// This file contains the code for the Form component

// Imports
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  defaultInstFields,
  defaultServData,
  instConfigs,
  instFieldsList,
  servConfigs,
  servFieldsList,
} from "../types/formValues";

// Component
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// Interface for the props of the Form component
interface FormProps {
  page: string | undefined;
  mode: string;
}

// Interface for the form fields
interface FormFields {
  htmlFor: string;
  label: string;
  type: string;
  id: string;
  name: string;
}

const Form: React.FC<FormProps> = ({ page, mode }) => {
  // State variable to store the form data
  const [instData, setInstData] = useState(defaultInstFields);
  const [servData, setServData] = useState(defaultServData);
  const [dropdownValue, setDropdownValue] = useState("");

  // Function to handle the form data change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (page === "instruments") {
      setInstData({
        ...instData,
        [e.target.name]: e.target.value,
      });
    } else if (page === "services") {
      setServData({
        ...servData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Function to handle the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // Function to handle save request
  const handleSave = () => {
    Swal.fire({
      title: "Confirm save?",
      text: "Do you want to save your changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, save it!",
      cancelButtonText: "No, keep editing",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "Your changes have been saved.", "success").then(
          () => window.history.back()
        );
      }
    });
  };

  // Function to fetch the data from the database
  useEffect(() => {
    // Function to fetch the instrument data
    const fetchInst = async () => {
      const response = await fetch(
        `http://localhost:3001/db/instrument?id='ABC-1234'`
      );
      const data = await response.json();
      setInstData(data[0]);
    };

    // Function to fetch the service data
    const fetchServ = async () => {
      const response = await fetch(
        `http://localhost:3001/db/service?id='ABC-1234'`
      );
      const data = await response.json();
      setServData(data[0]);
    };

    if (mode === "edit" && page === "instruments") {
      fetchInst();
    }
    if (mode === "edit" && page === "services") {
      fetchServ();
    }
  }, []);

  console.log(servData);

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="info-form">
        {page === "instruments" &&
          instFieldsList.map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>
                {
                  (instConfigs[field as keyof typeof instConfigs] as FormFields)
                    .label
                }
              </label>
              {field === "model" ? (
                <DropdownButton
                  id="dropdown-button-drop-down"
                  title={dropdownValue + "  ⇩"}
                  drop="down"
                  rootCloseEvent="click"
                >
                  <Dropdown.Item onClick={() => setDropdownValue("Model 1")}>
                    Model 1
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDropdownValue("Model 2")}>
                    Model 2
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDropdownValue("Model 3")}>
                    Model 3
                  </Dropdown.Item>
                </DropdownButton>
              ) : (
                <input
                  type={
                    (
                      instConfigs[
                        field as keyof typeof instConfigs
                      ] as FormFields
                    ).type
                  }
                  id={field}
                  name={field}
                  value={instData[field as keyof typeof instData]}
                  onChange={handleChange}
                />
              )}
              {field === "instrumentSO" ||
              field === "TestSheet" ||
              field === "COM" ||
              field === "serviceContract" ? (
                <button className="upload-btn">
                  <span className="material-symbols-outlined">download</span>
                </button>
              ) : null}
            </div>
          ))}
        {page === "services" &&
          servFieldsList.map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>
                {
                  (servConfigs[field as keyof typeof servConfigs] as FormFields)
                    .label
                }
              </label>
              {field === "Technician" ? (
                <DropdownButton
                  id="dropdown-button-drop-down"
                  title={dropdownValue + "  ⇩"}
                  drop="down"
                  rootCloseEvent="click"
                >
                  <Dropdown.Item
                    onClick={() => setDropdownValue("Technician 1")}
                  >
                    Technician 1
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setDropdownValue("Technician 2")}
                  >
                    Technician 2
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setDropdownValue("Technician 3")}
                  >
                    Technician 3
                  </Dropdown.Item>
                </DropdownButton>
              ) : (
                <input
                  type={
                    (
                      servConfigs[
                        field as keyof typeof servConfigs
                      ] as FormFields
                    ).type
                  }
                  id={field}
                  name={field}
                  value={servData[field as keyof typeof servData]}
                  onChange={handleChange}
                />
              )}
              {field === "performanceRptAttch" ? (
                <button className="upload-btn">
                  <span className="material-symbols-outlined">download</span>
                </button>
              ) : null}
            </div>
          ))}
      </form>
      <div className="bottom-btns">
        <button className="discard-btn" onClick={() => window.history.back()}>
          Discard
        </button>
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
