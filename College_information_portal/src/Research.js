import React, { useState } from "react";
import "./app.css";
import "./academic.css";

function Research() {
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
      <h1 style={{ fontSize: "40px", color: "#fa9c05" }}>
        Upload the Research Publications and doucments your college
      </h1>
      <div className="academic-box">
        <h3>Upload the Research Papers </h3>
        <div
          className="drag-and-drop-box2"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {file ? <p>{file.name}</p> : <p>Drag and drop the pdf file here</p>}
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
export default Research;
