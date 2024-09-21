import React, { useState } from "react";
import Add from "./Add";
import Update from "./Update";
import logo from "./OC.png";
import a1 from "./a1.png";
import a2 from "./a2.png";
import Complaint from "./Complaint";
import "./app.css";
import "./academic.css";
import Contact from "./Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const backgroundImageStyle = {
    backgroundImage: "url('b4.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="content-center">
            <h1 className="Title">
              Thousands of College Information at Your Finger Tip
            </h1>
            <input
              type="text"
              placeholder="Type college name"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-bar"
            />
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
            <div className="buttons-below-search">
              <button onClick={() => setCurrentPage("add")}>Add College</button>
              <button onClick={() => setCurrentPage("update")}>
                Update College
              </button>
            </div>
          </div>
        );
      case "add":
        return <Add goBack={() => setCurrentPage("home")} />;
      case "update":
        return <Update goBack={() => setCurrentPage("home")} />;
      case "complaint":
        return <Complaint />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div
      className="App"
      style={currentPage === "home" ? backgroundImageStyle : {}}
    >
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" width="90" height="60" />
        <div className="nav-buttons-container">
          <button className="nav-button" onClick={() => setCurrentPage("home")}>
            Home
          </button>
          <button className="nav-button">Sign in</button>
          <button className="nav-button">Login</button>
          <button
            className="nav-button"
            onClick={() => setCurrentPage("complaint")}
          >
            Complaint
          </button>
          <button
            className="nav-button"
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </button>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
