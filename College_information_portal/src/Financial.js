import React, { useState } from "react";
import "./app.css";
import "./academic.css";

function Financial() {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div className="academic-container">
      <h1
        style={{ fontSize: "40px", color: "#fa9c05", fontFamily: "sans-serif" }}
      >
        Upload the Financial statements of your College
      </h1>
      <div className="academic-box">
        <h3>Select which statement is this:</h3>
        <button4>Balance Sheet Statement</button4>
        <button4>Income Statement</button4>
        <button4>Profit & Loss Statement</button4>

        <h3>Select the year:</h3>
        <select className="year-dropdown">
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>

        <h3>Upload PDF:</h3>
        <div
          className="drag-and-drop-box"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {file ? (
            <p>{file.name}</p>
          ) : (
            <p>Drag and drop a PDF file of Statment</p>
          )}
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="file-upload"
          />
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default Financial;
