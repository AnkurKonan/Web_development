import React, { useState } from "react";
import "./app.css";
import "./academic.css";

function Academic() {
  const [academics, setAcademics] = useState([
    { course: "", duration: "", fees: "", seats: "" },
  ]);

  const [campus, setCampus] = useState([
    { name: "Canteen", present: "", number: "", capacity: "", image: "" },
    { name: "Seminar Hall", present: "", number: "", capacity: "", image: "" },
    {
      name: "Multipurpose Hall",
      present: "",
      number: "",
      capacity: "",
      image: "",
    },
    { name: "Labs", present: "", number: "", capacity: "", image: "" },
    { name: "Clubs", present: "", number: "", capacity: "", image: "" },
  ]);

  const [dimensionArea, setDimensionArea] = useState([
    { name: "Area of whole campus", area: "" },
    { name: "Area of Building", area: "" },
    { name: "Average size of classrooms", area: "" },
    { name: "Average size of Seminar hall", area: "" },
    { name: "Average size of Multipurpose hall", area: "" },
  ]);

  const [placements, setPlacements] = useState([
    { name: "Average Package", amount: "" },
    { name: "Highest Package", amount: "" },
    { name: "Lowest Package", amount: "" },
  ]);

  const handleInputChange = (section, index, field, value) => {
    const updatedSection = [...section];
    updatedSection[index][field] = value;
    if (section === academics) setAcademics(updatedSection);
    if (section === campus) setCampus(updatedSection);
    if (section === dimensionArea) setDimensionArea(updatedSection);
    if (section === placements) setPlacements(updatedSection);
  };

  const addAcademicRow = () =>
    setAcademics([
      ...academics,
      { course: "", duration: "", fees: "", seats: "" },
    ]);
  const addCampusRow = () =>
    setCampus([
      ...campus,
      { name: "", present: "", number: "", capacity: "", image: "" },
    ]);
  const addDimensionRow = () =>
    setDimensionArea([...dimensionArea, { name: "", area: "" }]);
  const addPlacementRow = () =>
    setPlacements([...placements, { name: "", amount: "" }]);

  return (
    <div className="academic-container">
      <h1 style={{ fontSize: "40px", color: "#fa9c05" }}>
        Enter the Information of your college Information
      </h1>

      {/* Academics Section */}
      <div className="academic-box">
        <h3>Academics</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>Fees</th>
              <th>Number of Seats</th>
            </tr>
          </thead>
          <tbody>
            {academics.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={row.course}
                    onChange={(e) =>
                      handleInputChange(
                        academics,
                        index,
                        "course",
                        e.target.value,
                      )
                    }
                    placeholder="Enter course"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.duration}
                    onChange={(e) =>
                      handleInputChange(
                        academics,
                        index,
                        "duration",
                        e.target.value,
                      )
                    }
                    placeholder="Enter duration"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.fees}
                    onChange={(e) =>
                      handleInputChange(
                        academics,
                        index,
                        "fees",
                        e.target.value,
                      )
                    }
                    placeholder="Enter fees"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.seats}
                    onChange={(e) =>
                      handleInputChange(
                        academics,
                        index,
                        "seats",
                        e.target.value,
                      )
                    }
                    placeholder="Enter number of seats"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button4 onClick={addAcademicRow}>Add Row</button4>
      </div>

      <div className="academic-box">
        <h3>Campus Tour</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Facility</th>
              <th>Present</th>
              <th>Number</th>
              <th>Capacity of Students</th>
              <th>Upload Images</th>
            </tr>
          </thead>
          <tbody>
            {campus.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>
                  <input
                    type="text"
                    value={row.present}
                    onChange={(e) =>
                      handleInputChange(
                        campus,
                        index,
                        "present",
                        e.target.value,
                      )
                    }
                    placeholder="Enter present"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.number}
                    onChange={(e) =>
                      handleInputChange(campus, index, "number", e.target.value)
                    }
                    placeholder="Enter number"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.capacity}
                    onChange={(e) =>
                      handleInputChange(
                        campus,
                        index,
                        "capacity",
                        e.target.value,
                      )
                    }
                    placeholder="Enter capacity"
                  />
                </td>
                <td>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleInputChange(campus, index, "image", e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button4 onClick={addCampusRow}>Add Row</button4>
      </div>

      <div className="academic-box">
        <h3>Dimension & Area</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Facility</th>
              <th>Area in Square Feet</th>
            </tr>
          </thead>
          <tbody>
            {dimensionArea.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>
                  <input
                    type="text"
                    value={row.area}
                    onChange={(e) =>
                      handleInputChange(
                        dimensionArea,
                        index,
                        "area",
                        e.target.value,
                      )
                    }
                    placeholder="Enter area"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button4 onClick={addDimensionRow}>Add Row</button4>
      </div>

      {/* Placements Section */}
      <div className="academic-box">
        <h3>Placements</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Package Type</th>
              <th>Amount in Rupees</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>
                  <input
                    type="text"
                    value={row.amount}
                    onChange={(e) =>
                      handleInputChange(
                        placements,
                        index,
                        "amount",
                        e.target.value,
                      )
                    }
                    placeholder="Enter amount"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button4 onClick={addPlacementRow}>Add Row</button4>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default Academic;
