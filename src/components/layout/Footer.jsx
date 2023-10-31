import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/white-logo.svg";

export const Footer = () => {
  return (
    <footer className="footer section">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-about">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="#" />
                    </Link>
                  </div>
                  <p>
                    Making the world a better place through constructing elegant
                    hierarchies.
                  </p>
                  <h4 className="social-title">Follow Us On:</h4>
                  <ul className="social">
                    <li>
                      <Link to="#">
                        <i className="lni lni-facebook-filled" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-twitter-original" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-linkedin-original" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-pinterest" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="lni lni-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Solutions</h3>
                  <ul>
                    <li>
                      <Link to="#">Marketing</Link>
                    </li>
                    <li>
                      <Link to="#">Analytics</Link>
                    </li>
                    <li>
                      <Link to="#">Commerce</Link>
                    </li>
                    <li>
                      <Link to="#">Insights</Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Support</h3>
                  <ul>
                    <li>
                      <Link to="#">Pricing</Link>
                    </li>
                    <li>
                      <Link to="#">Documentation</Link>
                    </li>
                    <li>
                      <Link to="#">Guides</Link>
                    </li>
                    <li>
                      <Link to="#">API Status</Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer newsletter">
                  <h3>Subscribe</h3>
                  <p>Subscribe to our newsletter for the latest updates</p>
                  <form
                    action="#"
                    method="get"
                    target="_blank"
                    className="newsletter-form"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Email address"
                      required="required"
                      type="email"
                    />
                    <div className="button">
                      <button className="sub-btn">
                        <i className="lni lni-envelope" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Footer Top */}
      {/* Start Copyright Area */}
      <div className="copyright-area">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-text">
                  © 2023 Spark - All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-owner">
                  Designed and Developed by{" "}
                  <Link to="https://uideck.com/" rel="nofollow" target="_blank">
                    UIdeck
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area */}
    </footer>
  );
};
