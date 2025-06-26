import React from "react";
import "./Navbar.css"; // Optional: for custom styles

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-white" : "navbar-dark bg-dark"} shadow-sm fixed-top`}>
      <div className="container">
        {/* Logo / Name */}
        <a className="navbar-brand fw-bold" href="#">
          ANISH KUMAR SINHA
        </a>

        {/* Toggle Button for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fw-semibold">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn ms-3 btn-sm btn-outline-secondary"
            title="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
