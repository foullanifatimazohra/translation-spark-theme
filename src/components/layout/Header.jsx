import React from "react";
import logo from "../../assets/images/logo/logo.svg";

export const Header = () => {
  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              {/* Start Navbar */}
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
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
                      <a
                        href="index.html"
                        className="active"
                        aria-label="Toggle navigation"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="about-us.html" aria-label="Toggle navigation">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dd-menu collapsed"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Pages
                      </a>
                      <ul className="sub-menu collapse" id="submenu-1-1">
                        <li className="nav-item">
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li className="nav-item">
                          <a href="pricing.html">Our Pricing</a>
                        </li>
                        <li className="nav-item">
                          <a href="signin.html">Sign In</a>
                        </li>
                        <li className="nav-item">
                          <a href="signup.html">Sign Up</a>
                        </li>
                        <li className="nav-item">
                          <a href="reset-password.html">Reset Password</a>
                        </li>
                        <li className="nav-item">
                          <a href="mail-success.html">Mail Success</a>
                        </li>
                        <li className="nav-item">
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="dd-menu collapsed"
                        href="javascript:void(0)"
                        data-bs-toggle="collapse"
                        data-bs-target="#submenu-1-2"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        Blog
                      </a>
                      <ul className="sub-menu collapse" id="submenu-1-2">
                        <li className="nav-item">
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li className="nav-item">
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" aria-label="Toggle navigation">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* navbar collapse */}
                <div className="button home-btn">
                  <a href="signup.html" className="btn">
                    Try for free
                  </a>
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
