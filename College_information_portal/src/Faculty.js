import React, { useState } from "react";
import "./add.css";
import "./app.css";
import "./academic.css";

function Faculty() {
  const [departments, setDepartments] = useState([
    {
      name: "",
      rows: [
        { role: "", salary: "", attendance: "", name: "", yearsWorked: "" },
      ],
    },
  ]);

  const addDepartment = () => {
    setDepartments([
      ...departments,
      {
        name: "",
        rows: [
          { role: "", salary: "", attendance: "", name: "", yearsWorked: "" },
        ],
      },
    ]);
  };

  const handleDeptNameChange = (deptIndex, value) => {
    const updatedDepartments = [...departments];
    updatedDepartments[deptIndex].name = value;
    setDepartments(updatedDepartments);
  };

  const handleInputChange = (deptIndex, rowIndex, field, value) => {
    const updatedDepartments = [...departments];
    updatedDepartments[deptIndex].rows[rowIndex][field] = value;
    setDepartments(updatedDepartments);
  };

  const addRow = (deptIndex) => {
    const updatedDepartments = [...departments];
    updatedDepartments[deptIndex].rows.push({
      role: "",
      salary: "",
      attendance: "",
      name: "",
      yearsWorked: "",
    });
    setDepartments(updatedDepartments);
  };

  return (
    <div className="academic-container">
      <h1 style={{ fontSize: "40px", color: "#fa9c05" }}>
        Enter the Information about Faculty Members & Department
      </h1>

      {/* Render a table for each department */}
      {departments.map((department, deptIndex) => (
        <div className="academic-box" key={deptIndex}>
          <h3>
            <input
              type="text"
              placeholder="Enter Department Name"
              value={department.name}
              onChange={(e) => handleDeptNameChange(deptIndex, e.target.value)}
            />
          </h3>
          <table className="academic-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Attendance Percentage</th>
                <th>Years Worked</th>
              </tr>
            </thead>
            <tbody>
              {department.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>
                    <input
                      type="text"
                      value={row.name}
                      placeholder="Enter name"
                      onChange={(e) =>
                        handleInputChange(
                          deptIndex,
                          rowIndex,
                          "name",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.role}
                      placeholder="Enter role"
                      onChange={(e) =>
                        handleInputChange(
                          deptIndex,
                          rowIndex,
                          "role",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.salary}
                      placeholder="Enter salary"
                      onChange={(e) =>
                        handleInputChange(
                          deptIndex,
                          rowIndex,
                          "salary",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.attendance}
                      placeholder="Enter attendance percentage"
                      onChange={(e) =>
                        handleInputChange(
                          deptIndex,
                          rowIndex,
                          "attendance",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.yearsWorked}
                      placeholder="Enter years worked"
                      onChange={(e) =>
                        handleInputChange(
                          deptIndex,
                          rowIndex,
                          "yearsWorked",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button4 onClick={() => addRow(deptIndex)}>Add Row</button4>
        </div>
      ))}

      <button onClick={addDepartment}>Add New Department</button>
      <button>Submit your Response</button>

      <div className="backforth">
        <button
          className="backbutton"
          onClick={() => window.history.back()}
        ></button>
        <button
          className="forwardbutton"
          onClick={() => window.history.forward()}
        ></button>
      </div>
    </div>
  );
}

export default Faculty;
