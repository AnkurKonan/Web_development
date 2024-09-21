import React, { useState } from "react";
import "./add.css";
import "./app.css";
import "./academic.css";

function Student() {
  const [classes, setClasses] = useState([
    {
      className: "",
      students: [{ studentName: "", studentID: "", course: "", GPA: "" }],
    },
  ]);

  // Function to add a new class
  const addClass = () => {
    setClasses([
      ...classes,
      {
        className: "",
        students: [{ studentName: "", studentID: "", course: "", GPA: "" }],
      },
    ]);
  };

  const handleClassNameChange = (classIndex, value) => {
    const updatedClasses = [...classes];
    updatedClasses[classIndex].className = value;
    setClasses(updatedClasses);
  };

  const handleInputChange = (classIndex, studentIndex, field, value) => {
    const updatedClasses = [...classes];
    updatedClasses[classIndex].students[studentIndex][field] = value;
    setClasses(updatedClasses);
  };

  // Function to add a new student to a class
  const addStudent = (classIndex) => {
    const updatedClasses = [...classes];
    updatedClasses[classIndex].students.push({
      studentName: "",
      studentID: "",
      course: "",
      GPA: "",
    });
    setClasses(updatedClasses);
  };

  return (
    <div className="academic-container">
      <h1 style={{ fontSize: "40px", color: "#fa9c05" }}>
        Enter Student Information for Each Class
      </h1>

      {/* Render a table for each class */}
      {classes.map((classInfo, classIndex) => (
        <div className="academic-box" key={classIndex}>
          <h3>
            <input
              type="text"
              placeholder="Enter Class Name"
              value={classInfo.className}
              onChange={(e) =>
                handleClassNameChange(classIndex, e.target.value)
              }
            />
          </h3>
          <table className="academic-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Course</th>
                <th>GPA</th>
              </tr>
            </thead>
            <tbody>
              {classInfo.students.map((student, studentIndex) => (
                <tr key={studentIndex}>
                  <td>
                    <input
                      type="text"
                      value={student.studentName}
                      placeholder="Enter student name"
                      onChange={(e) =>
                        handleInputChange(
                          classIndex,
                          studentIndex,
                          "studentName",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={student.studentID}
                      placeholder="Enter student ID"
                      onChange={(e) =>
                        handleInputChange(
                          classIndex,
                          studentIndex,
                          "studentID",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={student.course}
                      placeholder="Enter course"
                      onChange={(e) =>
                        handleInputChange(
                          classIndex,
                          studentIndex,
                          "course",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={student.GPA}
                      placeholder="Enter GPA"
                      onChange={(e) =>
                        handleInputChange(
                          classIndex,
                          studentIndex,
                          "GPA",
                          e.target.value,
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button4 onClick={() => addStudent(classIndex)}>Add Student</button4>
        </div>
      ))}

      <button onClick={addClass}>Add New Class</button>

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

export default Student;
