// This file contains the code for the record tables
// Imports
import { Link } from "react-router-dom";

// Interfaces
interface Record {
  [key: string]: string;
}

interface Headers {
  [key: string]: string;
}

interface RecordsProps {
  headers: Headers;
  records: Record[];
  link?: string;
}

const Records = ({ headers, records, link }: RecordsProps) => {
  return (
    <div className="records-wrapper">
      <table className="records-table">
        <thead className="table-head">
          <tr>
            <th></th> {/* Checkbox */}
            {Object.values(headers).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th></th> {/* Edit button */}
          </tr>
        </thead>
        <tbody className="table-body">
          {records.map((record, index) => (
            <tr key={index}>
              <input type="checkbox" placeholder={"x"} title={"checkbox"} />
              {Object.values(record).map((data, index) =>
                // If records does not contain a link or the data is not a link, display the data as usual
                !record.hasOwnProperty("Link") ? (
                  <td key={index}>{data}</td>
                ) : data !== record.Link ? (
                  <td key={index}>{data}</td>
                ) : null
              )}
              <Link to={link + `/${index + 1}`}>
                <button className="edit-btn">
                  <span className="material-symbols-outlined">edit</span>
                </button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
