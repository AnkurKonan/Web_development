import React, { useState } from "react";
import "./app.css";
import "./academic.css";

function Contact() {
  return (
    <div className="academic-container">
      <h1 style={{ fontSize: "40px", color: "#fa9c05" }}>
        Contact Information
      </h1>
      <div className="academic-box1">
        <div className="line">
          <h3>Helpline Number-1: XXXXXXXXXXX</h3>
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

        <div className="line">
          <h3>Helpline number-2: XXXXXXXXXXX</h3>
        </div>

        <div className="line">
          <h3>Email ID: xxxxxxxxxxx@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
