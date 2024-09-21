import React, { useState } from "react";
import "./add.css";
import logo from "./OC.png";
import "./app.css";
import Academic from "./Academic";
import Complaint from "./Complaint";
import Contact from "./Contact";
import Infrastructure from "./Infrastructure";
import Financial from "./Financial";
import Faculty from "./Faculty";
import Research from "./Research";
import Student from "./Student";

function Update() {
  const [currentPage, setCurrentPage] = useState("home");
  const [history, setHistory] = useState(["home"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const backgroundImageStyle = {
    backgroundImage: "url('building2.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };

  const handlePageChange = (page) => {
    // Update history
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(page);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setCurrentPage(page);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setCurrentPage(history[newIndex]);
      setHistoryIndex(newIndex);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setCurrentPage(history[newIndex]);
      setHistoryIndex(newIndex);
    }
  };

  return (
    <div
      className="App"
      style={currentPage === "home" ? backgroundImageStyle : {}}
    >
      <div className="backforth">
        <button className="backbutton" onClick={goBack}></button>
        <button className="forwardbutton" onClick={goForward}></button>
      </div>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" width="90" height="60" />
        <div className="nav-buttons-container">
          <button
            className="nav-button"
            onClick={() => handlePageChange("home")}
          >
            Home
          </button>
          <button className="nav-button">Sign in</button>
          <button className="nav-button">Login</button>
          <button
            className="nav-button"
            onClick={() => handlePageChange("complaint")}
          >
            Complaint
          </button>
          <button
            className="nav-button"
            onClick={() => handlePageChange("contact")}
          >
            Contact
          </button>
        </div>
      </nav>

      {currentPage === "home" ? (
        <div>
          <div className="welcome">
            <h2>Select what you want to Update</h2>
          </div>
          <div className="content">
            <div className="buttons2">
              <button onClick={() => handlePageChange("academic")}>
                Academics
              </button>
              <button onClick={() => handlePageChange("infrastructure")}>
                Infrastructure
              </button>
              <button onClick={() => handlePageChange("faculty")}>
                Faculty
              </button>
              <button onClick={() => handlePageChange("research")}>
                Research publications
              </button>
              <button onClick={() => handlePageChange("student")}>
                Student
              </button>
              <button onClick={() => handlePageChange("financial")}>
                Financial Statement
              </button>
            </div>
          </div>
        </div>
      ) : currentPage === "academic" ? (
        <Academic />
      ) : currentPage === "financial" ? (
        <Financial />
      ) : currentPage === "faculty" ? (
        <Faculty />
      ) : currentPage === "student" ? (
        <Student />
      ) : currentPage === "research" ? (
        <Research />
      ) : currentPage === "infrastructure" ? (
        <Infrastructure />
      ) : currentPage === "complaint" ? (
        <Complaint />
      ) : currentPage === "contact" ? (
        <Contact />
      ) : (
        <div>Page not found</div>
      )}
    </div>
  );
}

export default Update;
