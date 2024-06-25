// This file contains the code for the part details of each single BOM.
// Imports
// Libraries
import React, { useState } from "react";

const BOMParts = () => {
  // State variables to determine whether the import button is clicked
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);

  return (
    <div className="records-wrapper">
      <table className="records-table">
        <thead className="table-head">
          <tr>
            <th></th>
            <th>Part SKU</th>
            <th>Part Name</th>
            <th>Part Revision</th>
            <th>Part Short Description</th>
            <th>Supersedes</th>
            <th>Part Notes 1</th>
            <th>Part Notes 2</th>
            <th>Part Notes 3</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <input type="checkbox" />
            <td>
              <input type="text" placeholder="Part SKU" className="sku-input" />
              <button
                className="import-btn"
                onClick={() => setIsClicked1(true)}
              >
                <span className="material-symbols-outlined">download</span>
              </button>
            </td>
            {isClicked1 ? <td>Screen Boomarm</td> : <td></td>}
            {isClicked1 ? <td>1</td> : <td></td>}
            {isClicked1 ? (
              <td>
                1 metres in length, supports the screen and can be rotated 360
                degrees.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked1 ? <td>Body BL-001</td> : <td></td>}
            {isClicked1 ? (
              <td>
                Boomarm is in good condition, but needs to be checked
                fortnightly.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked1 ? <td>None</td> : <td></td>}
            {isClicked1 ? <td>None</td> : <td></td>}
            <button className="edit-btn">
              <span className="material-symbols-outlined">edit</span>
            </button>
          </tr>
          <tr>
            <input type="checkbox" />
            <td>
              <input type="text" placeholder="Part SKU" className="sku-input" />
              <button
                className="import-btn"
                onClick={() => setIsClicked2(true)}
              >
                <span className="material-symbols-outlined">download</span>
              </button>
            </td>
            {isClicked2 ? <td>Screen Boomarm</td> : <td></td>}
            {isClicked2 ? <td>1</td> : <td></td>}
            {isClicked2 ? (
              <td>
                1 metres in length, supports the screen and can be rotated 360
                degrees.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked2 ? <td>Body BL-001</td> : <td></td>}
            {isClicked2 ? (
              <td>
                Boomarm is in good condition, but needs to be checked
                fortnightly.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked2 ? <td>None</td> : <td></td>}
            {isClicked2 ? <td>None</td> : <td></td>}
            <button className="edit-btn">
              <span className="material-symbols-outlined">edit</span>
            </button>
          </tr>
          <tr>
            <input type="checkbox" />
            <td>
              <input type="text" placeholder="Part SKU" className="sku-input" />
              <button
                className="import-btn"
                onClick={() => setIsClicked3(true)}
              >
                <span className="material-symbols-outlined">download</span>
              </button>
            </td>
            {isClicked3 ? <td>Screen Boomarm</td> : <td></td>}
            {isClicked3 ? <td>1</td> : <td></td>}
            {isClicked3 ? (
              <td>
                1 metres in length, supports the screen and can be rotated 360
                degrees.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked3 ? <td>Body BL-001</td> : <td></td>}
            {isClicked3 ? (
              <td>
                Boomarm is in good condition, but needs to be checked
                fortnightly.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked3 ? <td>None</td> : <td></td>}
            {isClicked3 ? <td>None</td> : <td></td>}
            <button className="edit-btn">
              <span className="material-symbols-outlined">edit</span>
            </button>
          </tr>
          <tr>
            <input type="checkbox" />
            <td>
              <input type="text" placeholder="Part SKU" className="sku-input" />
              <button
                className="import-btn"
                onClick={() => setIsClicked4(true)}
              >
                <span className="material-symbols-outlined">download</span>
              </button>
            </td>
            {isClicked4 ? <td>Screen Boomarm</td> : <td></td>}
            {isClicked4 ? <td>1</td> : <td></td>}
            {isClicked4 ? (
              <td>
                1 metres in length, supports the screen and can be rotated 360
                degrees.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked4 ? <td>Body BL-001</td> : <td></td>}
            {isClicked4 ? (
              <td>
                Boomarm is in good condition, but needs to be checked
                fortnightly.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked4 ? <td>None</td> : <td></td>}
            {isClicked4 ? <td>None</td> : <td></td>}
            <button className="edit-btn">
              <span className="material-symbols-outlined">edit</span>
            </button>
          </tr>
          <tr>
            <input type="checkbox" />
            <td>
              <input type="text" placeholder="Part SKU" className="sku-input" />
              <button
                className="import-btn"
                onClick={() => setIsClicked5(true)}
              >
                <span className="material-symbols-outlined">download</span>
              </button>
            </td>
            {isClicked5 ? <td>Screen Boomarm</td> : <td></td>}
            {isClicked5 ? <td>1</td> : <td></td>}
            {isClicked5 ? (
              <td>
                1 metres in length, supports the screen and can be rotated 360
                degrees.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked5 ? <td>Body BL-001</td> : <td></td>}
            {isClicked5 ? (
              <td>
                Boomarm is in good condition, but needs to be checked
                fortnightly.
              </td>
            ) : (
              <td></td>
            )}
            {isClicked5 ? <td>None</td> : <td></td>}
            {isClicked5 ? <td>None</td> : <td></td>}
            <button className="edit-btn">
              <span className="material-symbols-outlined">edit</span>
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BOMParts;
