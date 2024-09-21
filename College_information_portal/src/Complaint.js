import React, { useState } from "react";
import "./app.css";
import "./academic.css";

function Complaint() {
  const [subject, setSubject] = useState("");
  const [against, setAgainst] = useState("");
  const [complaintText, setComplaintText] = useState("");

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleAgainstChange = (event) => {
    setAgainst(event.target.value);
  };

  const handleComplaintTextChange = (event) => {
    setComplaintText(event.target.value);
  };

  return (
    <div className="academic-container">
      <h1 style={{ fontSize: "40px", color: "#fa9c05" }}>
        Tell us your complaint
      </h1>
      <div className="academic-box">
        <div>
          <h3>Subject of Complaint:</h3>
          <input
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Enter the subject of your complaint"
            className="input-field"
          />
        </div>

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

        <div>
          <h3>Whom You Want to Complain Against:</h3>
          <input
            type="text"
            value={against}
            onChange={handleAgainstChange}
            placeholder="Enter the person/department you're complaining about"
            className="input-field"
          />
        </div>

        <div>
          <h3>Details of the Complaint:</h3>
          <textarea
            value={complaintText}
            onChange={handleComplaintTextChange}
            placeholder="Write your complaint here..."
            className="textarea-field"
          ></textarea>
        </div>
      </div>
      <button4>Submit</button4>
    </div>
  );
}

export default Complaint;
