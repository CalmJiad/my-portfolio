import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="top-header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid px-5">
            <a className="navbar-brand brand-logo" href="/">
              {"</> Dev Jiad"}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="d-flex align-items-center justify-content-center navbar-nav ms-auto mb-2 mb-lg-0 fs-5 ">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    My Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
