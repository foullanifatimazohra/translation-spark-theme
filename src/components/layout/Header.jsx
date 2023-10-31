import React from "react";
import logo from "../../assets/images/logo/white-logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              {/* Start Navbar */}
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo" />
                </Link>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link
                        to="/"
                        className="active"
                        aria-label="Toggle navigation"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="about-us" aria-label="Toggle navigation">
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="contact" aria-label="Toggle navigation">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>{" "}
                {/* navbar collapse */}
                <div className="button home-btn">
                  <Link to="signup" className="btn">
                    Try for free
                  </Link>
                </div>
              </nav>
              {/* End Navbar */}
            </div>
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </header>
  );
};
