import React from "react";
import "./app.css";
import "./academic.css";

function Accesskey() {
  return (
    <div className="academic-container">
      <h1 style={{ fontSize: "40px", color: "#fa9c05" }}>
        Upload the Financial statements of your College
      </h1>
      <div className="academic-box">
        <h3>Select which statement is this:</h3>
        <button>Balance sheet</button>
        <button>Balance sheet</button>
        <button>Balance sheet</button>
        <h3>Select the year:</h3>
        <div className="academic-box2"></div>
      </div>
    </div>
  );
}

export default Accesskey;
