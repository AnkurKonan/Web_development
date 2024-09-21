// import React, { useState } from "react";
// import "./app.css";
// import "./academic.css";

// function Add() {
//   const [collegeName, setCollegeName] = useState("");
//   const [academicRows, setAcademicRows] = useState([
//     { course: "", duration: "", fees: "", seats: "" },
//   ]);
//   const [campusRows, setCampusRows] = useState([
//     { canteen: "", present: "", number: "", capacity: "" },
//   ]);
//   const [dimensionRows, setDimensionRows] = useState([{ area: "" }]);
//   // State for Placements table
//   const [placementRows, setPlacementRows] = useState([
//     { averagePackage: "", highestPackage: "", lowestPackage: "" },
//   ]);

//   const handleInputChange = (e, index, table, field) => {
//     const newRows = [...table];
//     newRows[index][field] = e.target.value;
//     switch (table) {
//       case academicRows:
//         setAcademicRows(newRows);
//         break;
//       case campusRows:
//         setCampusRows(newRows);
//         break;
//       case dimensionRows:
//         setDimensionRows(newRows);
//         break;
//       case placementRows:
//         setPlacementRows(newRows);
//         break;
//       default:
//         break;
//     }
//   };

//   const addAcademicRow = () => {
//     setAcademicRows([
//       ...academicRows,
//       { course: "", duration: "", fees: "", seats: "" },
//     ]);
//   };

//   const addCampusRow = () => {
//     setCampusRows([
//       ...campusRows,
//       { canteen: "", present: "", number: "", capacity: "" },
//     ]);
//   };

//   const addDimensionRow = () => {
//     setDimensionRows([...dimensionRows, { area: "" }]);
//   };

//   const addPlacementRow = () => {
//     setPlacementRows([
//       ...placementRows,
//       { averagePackage: "", highestPackage: "", lowestPackage: "" },
//     ]);
//   };

//   const handleSubmit = () => {
//     console.log("College Name:", collegeName);
//     console.log("Academics Data:", academicRows);
//     console.log("Campus Tour Data:", campusRows);
//     console.log("Dimension & Area Data:", dimensionRows);
//     console.log("Placements Data:", placementRows);
//   };

//   return (
//     <div className="academic-container">
//       <h1
//         style={{ fontSize: "40px", color: "#fa9c05", fontFamily: "sans-serif" }}
//       >
//         Enter the Information of your College
//       </h1>
//       <div className="backforth">
//         <button
//           className="backbutton"
//           onClick={() => window.history.back()}
//         ></button>
//         <button
//           className="forwardbutton"
//           onClick={() => window.history.forward()}
//         ></button>
//       </div>
//       <div className="academic-box">
//         <h3>College Name</h3>
//         <input
//           type="text"
//           value={collegeName}
//           className="input-field"
//           onChange={(e) => setCollegeName(e.target.value)}
//           placeholder="Enter your college name"
//         />
//         <h3>College Address</h3>
//         <input
//           type="text"
//           value={collegeName}
//           className="input-field"
//           onChange={(e) => setCollegeName(e.target.value)}
//           placeholder="Enter your address of college"
//         />
//       </div>

//       {/* Academics Section */}
//       <div className="academic-box">
//         <h3>Academics</h3>
//         <table className="academic-table">
//           <thead>
//             <tr>
//               <th>Course</th>
//               <th>Duration</th>
//               <th>Fees</th>
//               <th>Number of Seats</th>
//             </tr>
//           </thead>
//           <tbody>
//             {academicRows.map((row, index) => (
//               <tr key={index}>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.course}
//                     onChange={(e) =>
//                       handleInputChange(e, index, academicRows, "course")
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.duration}
//                     onChange={(e) =>
//                       handleInputChange(e, index, academicRows, "duration")
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.fees}
//                     onChange={(e) =>
//                       handleInputChange(e, index, academicRows, "fees")
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.seats}
//                     onChange={(e) =>
//                       handleInputChange(e, index, academicRows, "seats")
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button4 onClick={addAcademicRow}>Add row</button4>
//       </div>

//       {/* Campus tour Section */}
//       <div className="academic-box">
//         <h3>Campus Tour</h3>
//         <table className="academic-table">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Present</th>
//               <th>Number of</th>
//               <th>Capacity of Student</th>
//               <th>Upload Images</th>
//             </tr>
//           </thead>
//           <tbody>
//             {campusRows.map((row, index) => (
//               <tr key={index}>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.canteen}
//                     onChange={(e) =>
//                       handleInputChange(e, index, campusRows, "canteen")
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.present}
//                     onChange={(e) =>
//                       handleInputChange(e, index, campusRows, "present")
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.number}
//                     onChange={(e) =>
//                       handleInputChange(e, index, campusRows, "number")
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.capacity}
//                     onChange={(e) =>
//                       handleInputChange(e, index, campusRows, "capacity")
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input type="file" />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button4 onClick={addCampusRow}>Add row</button4>
//       </div>

//       {/* Dimension & Area Section */}
//       <div className="academic-box">
//         <h3>Dimension & Area</h3>
//         <table className="academic-table">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Area in Square Feet</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dimensionRows.map((row, index) => (
//               <tr key={index}>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.area}
//                     onChange={(e) =>
//                       handleInputChange(e, index, dimensionRows, "area")
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.area}
//                     onChange={(e) =>
//                       handleInputChange(e, index, dimensionRows, "area")
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button4 onClick={addDimensionRow}>Add row</button4>
//       </div>

//       {/* Placements Section */}
//       <div className="academic-box">
//         <h3>Placements</h3>
//         <table className="academic-table">
//           <thead>
//             <tr>
//               <th>Average Package</th>
//               <th>Highest Package</th>
//               <th>Lowest Package</th>
//               <th>Year</th>
//             </tr>
//           </thead>
//           <tbody>
//             {placementRows.map((row, index) => (
//               <tr key={index}>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.averagePackage}
//                     onChange={(e) =>
//                       handleInputChange(
//                         e,
//                         index,
//                         placementRows,
//                         "averagePackage",
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.highestPackage}
//                     onChange={(e) =>
//                       handleInputChange(
//                         e,
//                         index,
//                         placementRows,
//                         "highestPackage",
//                       )
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     value={row.lowestPackage}
//                     onChange={(e) =>
//                       handleInputChange(
//                         e,
//                         index,
//                         placementRows,
//                         "lowestPackage",
//                       )
//                     }
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button4 onClick={addPlacementRow}>Add row</button4>
//       </div>

//       <div className="academic-container">
//         <h1
//           style={{
//             fontSize: "40px",
//             color: "#fa9c05",
//             fontFamily: "sans-serif",
//           }}
//         >
//           Upload the images of your college
//         </h1>
//         <div className="academic-box">
//           <h3>Upload your photos here (Minimum 20 & Maximum 30)</h3>
//           <div className="academic-box2"></div>
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// }
// export default Add;

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

  const [generatedKey, setGeneratedKey] = useState("");

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

  const generateRandomKey = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < 12; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
  };

  const handleSubmit = () => {
    const key = generateRandomKey();
    setGeneratedKey(key);
    console.log("Generated Key:", key);
    // Further submission logic can be added here
  };

  return (
    <div className="academic-container">
      <h1 style={{ fontSize: "40px", color: "#fa9c05" }}>
        Enter the Information of your college
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

      {/* Campus Section */}
      <div className="academic-box">
        <h3>Campus</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Facility Name</th>
              <th>Present</th>
              <th>Number</th>
              <th>Capacity</th>
              <th>Image</th>
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
                    placeholder="Present"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.number}
                    onChange={(e) =>
                      handleInputChange(campus, index, "number", e.target.value)
                    }
                    placeholder="Number"
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
                    placeholder="Capacity"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.image}
                    onChange={(e) =>
                      handleInputChange(campus, index, "image", e.target.value)
                    }
                    placeholder="Image URL"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button4 onClick={addCampusRow}>Add Row</button4>
      </div>

      {/* Dimension Area Section */}
      <div className="academic-box">
        <h3>Dimension Area</h3>
        <table className="academic-table">
          <thead>
            <tr>
              <th>Area Name</th>
              <th>Area</th>
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
              <th>Amount</th>
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

      {/* Submit Button */}
      <button onClick={handleSubmit}>Submit your Response</button>

      {/* Display Generated Key */}
      {generatedKey && (
        <div>
          <h3 style={{ fontSize: "40px", color: "#fa9c05" }}>
            Generated Key: {generatedKey}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Academic;
